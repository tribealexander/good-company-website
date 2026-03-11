'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/lib/supabase';

type Owner = 'TBD' | 'Alex' | 'Andrew' | 'Anna' | 'Christine' | 'Ian' | 'Jacob' | 'Jalen';

interface Task {
  id: string;
  task: string;
  owner: Owner;
  status: 'todo' | 'in_progress' | 'done' | 'blocked' | 'skipped';
  notes?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
}

interface Venue {
  id: string;
  name: string;
  type: string;
  capacity: string;
  location: string;
  link?: string;
  status: 'considering' | 'contacted' | 'toured' | 'quoted' | 'rejected' | 'confirmed';
  notes?: string;
}

const initialCategories: Category[] = [
  {
    id: 'branding',
    name: 'Branding & Identity',
    description: 'Event name, visual identity, marketing',
    tasks: [
      { id: 'b1', task: 'Decide on event name', owner: 'TBD', status: 'todo', notes: 'Currently "AI Conference" - needs something catchier?' },
      { id: 'b2', task: 'Create visual identity / logo', owner: 'TBD', status: 'todo' },
      { id: 'b3', task: 'Design marketing materials', owner: 'TBD', status: 'todo', notes: 'Flyers, social graphics, email templates' },
      { id: 'b4', task: 'Build event landing page', owner: 'TBD', status: 'todo' },
    ]
  },
  {
    id: 'venue',
    name: 'Venue',
    description: 'Primary focus - selecting and securing location',
    tasks: [
      { id: 'v1', task: 'Shortlist venue options (50-100 capacity)', owner: 'TBD', status: 'todo' },
      { id: 'v2', task: 'Confirm July 8th availability with top picks', owner: 'TBD', status: 'todo' },
      { id: 'v3', task: 'Schedule venue tours', owner: 'TBD', status: 'todo' },
      { id: 'v4', task: 'Get quotes and compare options', owner: 'TBD', status: 'todo' },
      { id: 'v5', task: 'Negotiate contract terms', owner: 'TBD', status: 'todo' },
      { id: 'v6', task: 'Secure venue deposit', owner: 'TBD', status: 'todo' },
    ]
  },
  {
    id: 'food',
    name: 'Food & Beverage',
    description: 'Catering - depends on venue choice',
    tasks: [
      { id: 'f1', task: 'Determine if venue has in-house catering', owner: 'TBD', status: 'blocked', notes: 'Blocked until venue confirmed' },
      { id: 'f2', task: 'If external: select catering vendor', owner: 'TBD', status: 'todo' },
      { id: 'f3', task: 'Plan menu (breakfast, lunch, dinner)', owner: 'TBD', status: 'todo' },
      { id: 'f4', task: 'Plan dinner logistics (separate venue?)', owner: 'TBD', status: 'todo' },
      { id: 'f5', task: 'Dietary restrictions process', owner: 'TBD', status: 'todo' },
    ]
  },
  {
    id: 'av',
    name: 'AV & Production',
    description: 'Technical requirements, entertainment',
    tasks: [
      { id: 'a1', task: 'Define AV requirements for main room', owner: 'TBD', status: 'todo', notes: 'Projector, mics, screens' },
      { id: 'a2', task: 'Define AV requirements for breakout rooms', owner: 'TBD', status: 'todo' },
      { id: 'a3', task: 'Determine if venue has in-house AV', owner: 'TBD', status: 'blocked' },
      { id: 'a4', task: 'If external: select AV rental vendor', owner: 'TBD', status: 'todo' },
      { id: 'a5', task: 'Book DJ / music for dinner', owner: 'TBD', status: 'todo' },
      { id: 'a6', task: 'Book photographer / videographer', owner: 'TBD', status: 'todo' },
    ]
  },
  {
    id: 'program',
    name: 'Program & Content',
    description: 'Sessions, speakers, hackathon',
    tasks: [
      { id: 'p1', task: 'Define breakout session topics', owner: 'TBD', status: 'todo', notes: 'e.g., "Building inventory systems in Power Automate"' },
      { id: 'p2', task: 'Confirm keynote speakers (2)', owner: 'TBD', status: 'todo', notes: 'David Grant, Adam Weinstein potentially' },
      { id: 'p3', task: 'Recruit session facilitators', owner: 'TBD', status: 'todo' },
      { id: 'p4', task: 'Plan 2-minute icebreaker talk format for lunch', owner: 'TBD', status: 'todo' },
      { id: 'p5', task: 'Design hackathon format & rules', owner: 'TBD', status: 'todo', notes: 'Runs days before conference' },
      { id: 'p6', task: 'Create day-of schedule / run of show', owner: 'TBD', status: 'todo' },
    ]
  },
  {
    id: 'attendees',
    name: 'Attendees & Registration',
    description: 'Prospecting, ticketing, RSVPs',
    tasks: [
      { id: 'at1', task: 'Compile initial prospect list', owner: 'TBD', status: 'todo', notes: '~10 soft commits so far' },
      { id: 'at2', task: 'Reach 20 soft commitments for go/no-go', owner: 'TBD', status: 'todo' },
      { id: 'at3', task: 'Set up ticketing/registration system', owner: 'TBD', status: 'todo' },
      { id: 'at4', task: 'Determine ticket pricing', owner: 'TBD', status: 'todo', notes: 'Typical range: $200-$3,000' },
      { id: 'at5', task: 'High school student coordination', owner: 'TBD', status: 'todo', notes: 'Hackathon participants' },
      { id: 'at6', task: 'Send invitations / outreach', owner: 'TBD', status: 'todo' },
    ]
  },
  {
    id: 'sponsors',
    name: 'Sponsors',
    description: 'Packages, outreach, fulfillment',
    tasks: [
      { id: 's1', task: 'Create sponsor package tiers', owner: 'TBD', status: 'todo', notes: '1k / 3k / 5k?' },
      { id: 's2', task: 'Shortlist potential sponsors', owner: 'TBD', status: 'todo', notes: 'AI tool vendors from seminars' },
      { id: 's3', task: 'Sponsor outreach', owner: 'TBD', status: 'todo', notes: 'After venue confirmed' },
      { id: 's4', task: 'Sponsor fulfillment planning', owner: 'TBD', status: 'todo', notes: 'Logo placement, speaking slots, etc.' },
    ]
  },
  {
    id: 'admin',
    name: 'Admin & Coordination',
    description: 'Team communication, meetings',
    tasks: [
      { id: 'ad1', task: 'Set up Slack channel', owner: 'TBD', status: 'todo' },
      { id: 'ad2', task: 'Schedule weekly check-in meetings', owner: 'TBD', status: 'todo' },
      { id: 'ad3', task: 'Create shared budget tracker', owner: 'TBD', status: 'todo' },
      { id: 'ad4', task: 'Go/no-go decision meeting', owner: 'TBD', status: 'todo', notes: 'By March 31' },
    ]
  },
];

const initialVenues: Venue[] = [
  {
    id: '1',
    name: 'U of T - Hart House',
    type: 'University',
    capacity: '50-200',
    location: 'St. George Campus',
    link: 'https://harthouse.ca/spaces',
    status: 'considering',
  },
  {
    id: '2',
    name: 'U of T - Munk School',
    type: 'University',
    capacity: '50-150',
    location: 'Bloor & St. George',
    link: 'https://munkschool.utoronto.ca/facilities-event-rental',
    status: 'considering',
    notes: 'Heritage buildings, great for conferences'
  },
  {
    id: '3',
    name: 'U of T - Innis College Town Hall',
    type: 'University',
    capacity: '199 seated',
    location: 'St. George Campus',
    link: 'https://innis.utoronto.ca/book-a-venue/',
    status: 'considering',
    notes: 'Cinema/lecture space with full AV'
  },
  {
    id: '4',
    name: 'Schwartz Reisman Innovation Campus',
    type: 'University',
    capacity: '50-200',
    location: 'College St',
    link: 'https://sric.utoronto.ca/event-spaces/',
    status: 'considering',
    notes: 'New building, rooftop patios, city views'
  },
  {
    id: '5',
    name: 'Design Exchange',
    type: 'Institution',
    capacity: '50-250',
    location: 'Financial District',
    link: 'https://designexchangetoronto.com/',
    status: 'considering',
    notes: 'Former Stock Exchange, immersive projection available'
  },
  {
    id: '6',
    name: 'TMU - Oakham House',
    type: 'University',
    capacity: '50-170',
    location: 'Yonge & Dundas',
    link: 'https://www.torontomu.ca/university-business-services/event-space-reservations/',
    status: 'considering',
  },
  {
    id: '7',
    name: 'St. Lawrence Hall',
    type: 'Historic',
    capacity: '50-200',
    location: 'St. Lawrence Market',
    link: 'https://www.stlawrencemarket.com/st_lawrence_hall',
    status: 'considering',
    notes: 'Historic venue, exposed brick, 20ft windows'
  },
  {
    id: '8',
    name: 'ROM - Currelly Gallery',
    type: 'Museum',
    capacity: '50-150',
    location: 'Bloor & Avenue Rd',
    link: 'https://www.rom.on.ca/venue-rentals',
    status: 'considering',
    notes: 'Also has 300-seat theatre for keynotes'
  },
  {
    id: '9',
    name: 'AGO - Conference Rooms',
    type: 'Gallery',
    capacity: '50-100',
    location: 'Dundas & McCaul',
    link: 'https://ago.ca/visit/host-your-event',
    status: 'considering',
    notes: 'Skyline views, team workshops available'
  },
  {
    id: '10',
    name: 'Fairmont Royal York',
    type: 'Hotel',
    capacity: '50-1,670',
    location: 'Union Station',
    link: 'https://www.fairmont.com/royal-york-toronto/meetings-weddings/',
    status: 'considering',
    notes: '36 meeting rooms, 73,000 sq ft total'
  },
  {
    id: '11',
    name: 'The DMZ',
    type: 'Tech Hub',
    capacity: '50-100',
    location: 'Yonge & Dundas (TMU)',
    link: 'https://dmz.torontomu.ca/',
    status: 'considering',
    notes: 'World-leading incubator, startup ecosystem, meeting rooms'
  },
  {
    id: '12',
    name: 'Royal Conservatory of Music',
    type: 'Cultural',
    capacity: '50-1,135',
    location: 'Bloor & Avenue',
    link: 'https://www.rcmusic.com/about-us/rent-space-at-the-royal-conservatory',
    status: 'considering',
    notes: 'Koerner Hall, Temerty Theatre, stunning acoustics'
  },
  {
    id: '13',
    name: 'MaRS Discovery District',
    type: 'Tech Hub',
    capacity: '50-350',
    location: 'College & University',
    link: 'https://www.marsdd.com/our-space/host-an-event-at-mars/',
    status: 'considering',
    notes: 'AI/tech ecosystem, auditorium, Vector Institute nearby'
  },
  {
    id: '14',
    name: 'The Carlu',
    type: 'Historic',
    capacity: '50-600',
    location: 'College Park (Yonge & College)',
    link: 'https://www.thecarlu.com/',
    status: 'considering',
    notes: 'Art deco landmark, Round Room seats 300'
  },
  {
    id: '15',
    name: 'TIFF Bell Lightbox',
    type: 'Cultural',
    capacity: '50-523',
    location: 'King & John',
    link: 'https://www.oliverbonacini.com/event-venues/tiff-lightbox/',
    status: 'considering',
    notes: 'Cinema screens, studios, rooftop terrace'
  },
  {
    id: '16',
    name: 'Toronto Reference Library - Appel Salon',
    type: 'Institution',
    capacity: '50-575',
    location: 'Yonge & Bloor',
    link: 'https://venuerentals.tpl.ca/the-bram-bluma-appel',
    status: 'considering',
    notes: '12,000 sq ft, outdoor terraces, $1,900-3,475'
  },
  {
    id: '17',
    name: 'Gardiner Museum',
    type: 'Museum',
    capacity: '50-250',
    location: 'Queen\'s Park',
    link: 'https://www.gardinermuseum.on.ca/visit/venue-rentals/',
    status: 'considering',
    notes: 'Terrace Room with built-in AV, elegant setting'
  },
  {
    id: '18',
    name: 'Evergreen Brick Works',
    type: 'Unique',
    capacity: '50-2,000',
    location: 'Don Valley',
    link: 'https://www.evergreen.ca/evergreen-brick-works/host-your-event/',
    status: 'considering',
    notes: 'LEED Platinum, BMO Atrium, indoor/outdoor, $2K-10K'
  },
  {
    id: '19',
    name: 'Ace Hotel Toronto',
    type: 'Hotel',
    capacity: '50-100',
    location: 'Camden St (Fashion District)',
    link: 'https://acehotel.com/toronto/private-spaces/rooms-specs/',
    status: 'considering',
    notes: 'Interspace (1,352 sq ft), Form (834 sq ft), boutique/creative vibe'
  },
];

const statusColors = {
  todo: 'bg-gray-100 text-gray-700',
  in_progress: 'bg-blue-100 text-blue-700',
  done: 'bg-green-100 text-green-700',
  blocked: 'bg-red-100 text-red-700',
  skipped: 'bg-slate-100 text-slate-500',
};

const venueStatusColors = {
  considering: 'bg-gray-100 text-gray-700',
  contacted: 'bg-blue-100 text-blue-700',
  toured: 'bg-purple-100 text-purple-700',
  quoted: 'bg-amber-100 text-amber-700',
  rejected: 'bg-red-100 text-red-700',
  confirmed: 'bg-green-100 text-green-700',
};

const ownerColors: Record<Owner, string> = {
  TBD: 'bg-gray-400',
  Alex: 'bg-emerald-600',
  Andrew: 'bg-sky-500',
  Anna: 'bg-teal-500',
  Christine: 'bg-cyan-500',
  Ian: 'bg-blue-600',
  Jacob: 'bg-slate-600',
  Jalen: 'bg-purple-500',
};

export default function AIConferenceDashboard() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [venues, setVenues] = useState<Venue[]>(initialVenues);
  const [activeTab, setActiveTab] = useState<'tasks' | 'venues'>('tasks');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['branding', 'venue']));
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Save to Supabase (debounced)
  const saveToSupabase = useCallback(async (cats: Category[], vens: Venue[], expanded: Set<string>) => {
    if (!supabase) return;
    setIsSaving(true);
    try {
      await supabase
        .from('conference_data')
        .upsert({
          id: 1,
          categories: cats,
          venues: vens,
          expanded_categories: [...expanded],
          updated_at: new Date().toISOString(),
        });
    } catch (error) {
      console.error('Error saving to Supabase:', error);
    }
    setIsSaving(false);
  }, []);

  // Load from Supabase on mount
  useEffect(() => {
    if (!supabase) {
      setIsLoaded(true);
      return;
    }

    const db = supabase; // TypeScript narrowing

    const loadData = async () => {
      const { data, error } = await db
        .from('conference_data')
        .select('*')
        .eq('id', 1)
        .single();

      if (data && !error) {
        if (data.categories && data.categories.length > 0) {
          setCategories(data.categories);
        }
        if (data.venues && data.venues.length > 0) {
          setVenues(data.venues);
        }
        if (data.expanded_categories && data.expanded_categories.length > 0) {
          setExpandedCategories(new Set(data.expanded_categories));
        }
      }
      setIsLoaded(true);
    };

    loadData();

    // Subscribe to real-time changes
    const channel = db
      .channel('conference_changes')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'conference_data' },
        (payload) => {
          const newData = payload.new as { categories: Category[]; venues: Venue[]; expanded_categories: string[] };
          if (newData.categories) setCategories(newData.categories);
          if (newData.venues) setVenues(newData.venues);
          if (newData.expanded_categories) setExpandedCategories(new Set(newData.expanded_categories));
        }
      )
      .subscribe();

    return () => {
      db.removeChannel(channel);
    };
  }, []);

  // Save to Supabase when state changes (short debounce)
  useEffect(() => {
    if (!isLoaded) return;

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      saveToSupabase(categories, venues, expandedCategories);
    }, 150); // Reduced from 500ms for faster saves

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [categories, venues, expandedCategories, isLoaded, saveToSupabase]);

  // Save immediately when leaving the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isLoaded) {
        saveToSupabase(categories, venues, expandedCategories);
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [categories, venues, expandedCategories, isLoaded, saveToSupabase]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedCategories(new Set(categories.map(c => c.id)));
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

  const resetToDefaults = async () => {
    if (confirm('Reset all tasks and venues to defaults? This cannot be undone.')) {
      setCategories(initialCategories);
      setVenues(initialVenues);
      setExpandedCategories(new Set(['branding', 'venue']));
      await saveToSupabase(initialCategories, initialVenues, new Set(['branding', 'venue']));
    }
  };

  const updateTaskStatus = (categoryId: string, taskId: string, status: Task['status']) => {
    setCategories(categories.map(cat =>
      cat.id === categoryId
        ? { ...cat, tasks: cat.tasks.map(t => t.id === taskId ? { ...t, status } : t) }
        : cat
    ));
  };

  const updateTaskOwner = (categoryId: string, taskId: string, owner: Task['owner']) => {
    setCategories(categories.map(cat =>
      cat.id === categoryId
        ? { ...cat, tasks: cat.tasks.map(t => t.id === taskId ? { ...t, owner } : t) }
        : cat
    ));
  };

  const updateVenueStatus = (id: string, status: Venue['status']) => {
    setVenues(venues.map(v => v.id === id ? { ...v, status } : v));
  };

  // Stats
  const allTasks = categories.flatMap(c => c.tasks);
  const taskStats = {
    total: allTasks.length,
    done: allTasks.filter(t => t.status === 'done').length,
    inProgress: allTasks.filter(t => t.status === 'in_progress').length,
    blocked: allTasks.filter(t => t.status === 'blocked').length,
    skipped: allTasks.filter(t => t.status === 'skipped').length,
  };

  const getCategoryStats = (cat: Category) => {
    const done = cat.tasks.filter(t => t.status === 'done').length;
    return `${done}/${cat.tasks.length}`;
  };

  const daysUntilEvent = Math.ceil((new Date('2026-07-08').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const daysUntilGoNoGo = Math.ceil((new Date('2026-03-31').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-text-light">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-xl font-semibold text-text">AI Conference</h1>
                <p className="text-sm text-text-light">Toronto - July 8th</p>
              </div>
              {isSaving && (
                <span className="text-xs text-primary animate-pulse">Saving...</span>
              )}
              <button
                onClick={resetToDefaults}
                className="text-xs text-text-light hover:text-red-600 transition-colors"
                title="Reset to defaults"
              >
                Reset
              </button>
            </div>
            <div className="flex gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-text">{daysUntilGoNoGo}</div>
                <div className="text-text-light">days to go/no-go</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{daysUntilEvent}</div>
                <div className="text-text-light">days to event</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-5 gap-3 mb-6">
          <div className="bg-white border border-border rounded-lg p-3">
            <div className="text-2xl font-bold">{taskStats.total}</div>
            <div className="text-xs text-text-light">Total</div>
          </div>
          <div className="bg-white border border-border rounded-lg p-3">
            <div className="text-2xl font-bold text-green-600">{taskStats.done}</div>
            <div className="text-xs text-text-light">Done</div>
          </div>
          <div className="bg-white border border-border rounded-lg p-3">
            <div className="text-2xl font-bold text-primary">{taskStats.inProgress}</div>
            <div className="text-xs text-text-light">In Progress</div>
          </div>
          <div className="bg-white border border-border rounded-lg p-3">
            <div className="text-2xl font-bold text-red-600">{taskStats.blocked}</div>
            <div className="text-xs text-text-light">Blocked</div>
          </div>
          <div className="bg-white border border-border rounded-lg p-3">
            <div className="text-2xl font-bold text-slate-400">{taskStats.skipped}</div>
            <div className="text-xs text-text-light">Skipped</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'tasks'
                ? 'bg-primary text-white'
                : 'bg-white border border-border text-text-light hover:text-text'
            }`}
          >
            Tasks ({taskStats.total})
          </button>
          <button
            onClick={() => setActiveTab('venues')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'venues'
                ? 'bg-primary text-white'
                : 'bg-white border border-border text-text-light hover:text-text'
            }`}
          >
            Venues ({venues.length})
          </button>

          {activeTab === 'tasks' && (
            <div className="ml-auto flex gap-2">
              <button
                onClick={expandAll}
                className="px-3 py-1 text-sm text-text-light hover:text-text"
              >
                Expand all
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1 text-sm text-text-light hover:text-text"
              >
                Collapse all
              </button>
            </div>
          )}
        </div>

        {/* Tasks View - Collapsible Categories */}
        {activeTab === 'tasks' && (
          <div className="space-y-3">
            {categories.map((category) => {
              const isExpanded = expandedCategories.has(category.id);
              const hasBlockedTasks = category.tasks.some(t => t.status === 'blocked');

              return (
                <div key={category.id} className="bg-white border border-border rounded-lg overflow-hidden">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-cream/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                        ▶
                      </span>
                      <div className="text-left">
                        <div className="font-medium text-text">{category.name}</div>
                        <div className="text-xs text-text-light">{category.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {hasBlockedTasks && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded">blocked</span>
                      )}
                      <span className="text-sm text-text-light">{getCategoryStats(category)}</span>
                    </div>
                  </button>

                  {/* Tasks List */}
                  {isExpanded && (
                    <div className="border-t border-border">
                      {category.tasks.map((task) => (
                        <div
                          key={task.id}
                          className={`px-4 py-3 border-b border-border last:border-b-0 hover:bg-cream/50 flex items-center gap-4 ${task.status === 'skipped' ? 'opacity-50' : ''}`}
                        >
                          {/* Task name */}
                          <div className="flex-1 min-w-0">
                            <div className={`text-sm text-text ${task.status === 'skipped' ? 'line-through' : ''}`}>{task.task}</div>
                            {task.notes && (
                              <div className="text-xs text-text-light mt-0.5">{task.notes}</div>
                            )}
                          </div>

                          {/* Owner */}
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <div className={`w-5 h-5 rounded-full ${ownerColors[task.owner]} flex items-center justify-center text-white text-xs font-medium`}>
                              {task.owner[0]}
                            </div>
                            <select
                              value={task.owner}
                              onChange={(e) => updateTaskOwner(category.id, task.id, e.target.value as Owner)}
                              className="text-xs text-text-light bg-transparent border-0 cursor-pointer hover:text-text p-0 w-20"
                            >
                              <option value="TBD">TBD</option>
                              <option value="Alex">Alex</option>
                              <option value="Andrew">Andrew</option>
                              <option value="Anna">Anna</option>
                              <option value="Christine">Christine</option>
                              <option value="Ian">Ian</option>
                              <option value="Jacob">Jacob</option>
                              <option value="Jalen">Jalen</option>
                            </select>
                          </div>

                          {/* Status */}
                          <select
                            value={task.status}
                            onChange={(e) => updateTaskStatus(category.id, task.id, e.target.value as Task['status'])}
                            className={`px-2 py-1 rounded text-xs font-medium ${statusColors[task.status]} border-0 cursor-pointer flex-shrink-0`}
                          >
                            <option value="todo">To Do</option>
                            <option value="in_progress">In Progress</option>
                            <option value="done">Done</option>
                            <option value="blocked">Blocked</option>
                            <option value="skipped">Skipped</option>
                          </select>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Venues View */}
        {activeTab === 'venues' && (
          <div className="space-y-4">
            {venues.map((venue) => (
              <div key={venue.id} className="bg-white border border-border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-medium text-text">{venue.name}</h3>
                      <div className="flex gap-2 text-sm text-text-light mt-0.5">
                        <span>{venue.type}</span>
                        <span>•</span>
                        <span>{venue.capacity}</span>
                        <span>•</span>
                        <span>{venue.location}</span>
                      </div>
                    </div>
                    {venue.link && (
                      <a
                        href={venue.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 text-sm text-primary hover:text-primary-light hover:bg-primary/5 rounded transition-colors"
                      >
                        View site ↗
                      </a>
                    )}
                  </div>
                  <select
                    value={venue.status}
                    onChange={(e) => updateVenueStatus(venue.id, e.target.value as Venue['status'])}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${venueStatusColors[venue.status]} border-0 cursor-pointer`}
                  >
                    <option value="considering">Considering</option>
                    <option value="contacted">Contacted</option>
                    <option value="toured">Toured</option>
                    <option value="quoted">Quoted</option>
                    <option value="rejected">Rejected</option>
                    <option value="confirmed">Confirmed</option>
                  </select>
                </div>
                {venue.notes && (
                  <div className="mt-2 text-sm text-text-light">{venue.notes}</div>
                )}
              </div>
            ))}

            <button className="w-full py-3 border-2 border-dashed border-border rounded-lg text-text-light hover:border-primary hover:text-primary transition-colors">
              + Add Venue
            </button>
          </div>
        )}

        {/* Key Dates */}
        <div className="mt-8 bg-white border border-border rounded-lg p-6">
          <h3 className="text-sm font-semibold text-text-light uppercase mb-4">Key Dates</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-medium text-text">Mar 31</div>
              <div className="text-text-light">Go/No-Go Decision</div>
              <div className="text-xs text-text-light">20 commits + venue</div>
            </div>
            <div>
              <div className="font-medium text-text">Jul 1</div>
              <div className="text-text-light">Canada Day</div>
              <div className="text-xs text-text-light">Hackathon start?</div>
            </div>
            <div>
              <div className="font-medium text-text">Jul 8</div>
              <div className="text-text-light">Conference Day</div>
              <div className="text-xs text-text-light">Wednesday</div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mt-6 bg-white border border-border rounded-lg p-6">
          <h3 className="text-sm font-semibold text-text-light uppercase mb-4">Team</h3>
          <div className="grid grid-cols-4 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-medium">A</div>
              <div className="font-medium text-text">Alex Tribe</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center text-white text-xs font-medium">A</div>
              <div className="font-medium text-text">Andrew Zhang</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-medium">A</div>
              <div className="font-medium text-text">Anna Poutanen</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xs font-medium">C</div>
              <div className="font-medium text-text">Christine Plateo</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-medium">I</div>
              <div className="font-medium text-text">Ian Burgess</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-slate-600 flex items-center justify-center text-white text-xs font-medium">J</div>
              <div className="font-medium text-text">Jacob</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-medium">J</div>
              <div className="font-medium text-text">Jalen Locke</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

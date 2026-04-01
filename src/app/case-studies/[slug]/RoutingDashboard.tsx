"use client";

export default function RoutingDashboard() {
  const weeklyData = [
    { week: "Wk 1", pct: 95.8 },
    { week: "Wk 2", pct: 96.2 },
    { week: "Wk 3", pct: 96.9 },
    { week: "Wk 4", pct: 97.4 },
    { week: "Wk 5", pct: 97.6 },
    { week: "Wk 6", pct: 98.1 },
    { week: "Wk 7", pct: 98.3 },
    { week: "Wk 8", pct: 98.5 },
  ];

  const recentRouting = [
    { ticket: "WiFi outage - Bldg 4", priority: "P1", tech: "Field Tech A", confirmed: true },
    { ticket: "Password reset", priority: "P3", tech: "Remote Support", confirmed: true },
    { ticket: "Gate access - Unit 12", priority: "P2", tech: "Field Tech B", confirmed: true },
    { ticket: "Audio bleed - Lobby", priority: "P3", tech: "AV Specialist", confirmed: true },
    { ticket: "New client onboarding", priority: "P3", tech: "Remote Support", confirmed: false },
    { ticket: "Fiber splice - Switch 4", priority: "P1", tech: "Infra Specialist", confirmed: true },
  ];

  const categories = [
    { name: "Network / WiFi", count: 612 },
    { name: "Email / M365", count: 487 },
    { name: "Access Control", count: 341 },
    { name: "AV / Audio", count: 289 },
    { name: "Cameras / NVR", count: 214 },
    { name: "Infrastructure", count: 198 },
    { name: "Other", count: 206 },
  ];

  const priorityColors: Record<string, { bg: string; text: string }> = {
    P1: { bg: "bg-red-50", text: "text-red-800" },
    P2: { bg: "bg-amber-50", text: "text-amber-800" },
    P3: { bg: "bg-[#E8EDE9]", text: "text-[#004D36]" },
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-[#004D36] lg:text-2xl">Routing Intelligence</h3>
          <p className="text-sm text-text-light mt-1">Feb 1 – Mar 31, 2026 · 60 days</p>
        </div>
        <span className="bg-[#006747] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
          LIVE
        </span>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
        {[
          { label: "Accuracy Rate", value: "97.9%", sub: "+2.1% from month 1", gold: true },
          { label: "Tickets Routed", value: "2,347", sub: "~1,200 / month" },
          { label: "Auto-Assigned", value: "2,298", sub: "98% of total volume" },
          { label: "Dispatcher Overrides", value: "49", sub: "Edge cases & new clients" },
        ].map((m) => (
          <div key={m.label} className="bg-white border border-border rounded-lg p-4 lg:p-5">
            <p className="text-[11px] font-medium text-text-light uppercase tracking-wider mb-2">{m.label}</p>
            <p className={`text-2xl lg:text-3xl font-bold ${m.gold ? "text-gold" : "text-[#004D36]"}`}>{m.value}</p>
            <p className={`text-xs mt-1 ${m.label === "Accuracy Rate" ? "text-[#2D8659] font-medium" : "text-text-light"}`}>
              {m.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Middle Panels */}
      <div className="grid lg:grid-cols-2 gap-4 mb-6">
        {/* Weekly Accuracy */}
        <div className="bg-white border border-border rounded-lg p-5 lg:p-6">
          <h4 className="text-sm font-semibold text-dark mb-5">Weekly Accuracy</h4>
          <div className="flex flex-col gap-3">
            {weeklyData.map((w, i) => (
              <div key={w.week} className="flex items-center gap-3">
                <span className="text-xs text-text-light w-10 text-right shrink-0">{w.week}</span>
                <div className="flex-1 h-5 bg-[#E8EDE9] rounded overflow-hidden">
                  <div
                    className={`h-full rounded ${i === weeklyData.length - 1 ? "bg-gold" : "bg-[#006747]"}`}
                    style={{ width: `${w.pct}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-dark w-11 shrink-0">{w.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Routing */}
        <div className="bg-white border border-border rounded-lg p-5 lg:p-6">
          <h4 className="text-sm font-semibold text-dark mb-5">Recent Routing Decisions</h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {["Ticket", "Priority", "Routed To", "Status"].map((h) => (
                    <th key={h} className="text-[11px] font-semibold text-text-light uppercase tracking-wider text-left pb-3 border-b border-border">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentRouting.map((r, i) => {
                  const pc = priorityColors[r.priority] || priorityColors.P3;
                  return (
                    <tr key={i}>
                      <td className="text-[13px] py-2.5 border-b border-[#F0EBE3] pr-3">{r.ticket}</td>
                      <td className="py-2.5 border-b border-[#F0EBE3] pr-3">
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${pc.bg} ${pc.text}`}>{r.priority}</span>
                      </td>
                      <td className="text-[13px] py-2.5 border-b border-[#F0EBE3] pr-3">{r.tech}</td>
                      <td className="text-[13px] py-2.5 border-b border-[#F0EBE3]">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${r.confirmed ? "bg-[#006747]" : "bg-gold"}`} />
                          {r.confirmed ? "Confirmed" : "Override"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Panels */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Categories */}
        <div className="bg-white border border-border rounded-lg p-5 lg:p-6">
          <h4 className="text-sm font-semibold text-dark mb-5">Top Routing Categories</h4>
          <div className="flex flex-col gap-3">
            {categories.map((c) => (
              <div key={c.name} className="flex justify-between items-center text-[13px]">
                <span className="text-text">{c.name}</span>
                <span className="font-semibold text-[#004D36]">{c.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Donut */}
        <div className="bg-white border border-border rounded-lg p-5 lg:p-6">
          <h4 className="text-sm font-semibold text-dark mb-5">Assignment Outcomes</h4>
          <div className="flex items-center gap-6">
            <svg className="w-28 h-28 shrink-0" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#E8EDE9" strokeWidth="20" />
              <circle
                cx="60" cy="60" r="50" fill="none" stroke="#006747" strokeWidth="20"
                strokeDasharray="307.9 314.2" strokeDashoffset="0"
                transform="rotate(-90 60 60)"
              />
              <circle
                cx="60" cy="60" r="50" fill="none" stroke="#B8860B" strokeWidth="20"
                strokeDasharray="6.3 314.2" strokeDashoffset="-307.9"
                transform="rotate(-90 60 60)"
              />
              <text x="60" y="57" textAnchor="middle" fontSize="18" fontWeight="700" fill="#004D36">97.9</text>
              <text x="60" y="72" textAnchor="middle" fontSize="10" fill="#6B6B6B">%</text>
            </svg>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#006747] shrink-0" />
                <span>Auto-routed & confirmed (2,298)</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0" />
                <span>Dispatcher override (49)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <p className="text-center text-[11px] text-[#B0ADA6] tracking-wider mt-6">GOOD COMPANY</p>
    </div>
  );
}

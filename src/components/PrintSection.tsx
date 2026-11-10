import React from 'react';
import { profile } from '../data/profile';

const PrintSection: React.FC = () => {
  return (
    <div className="print-only p-10 bg-white text-black">
      <div className="flex justify-between items-start border-b-2 border-black pb-8 mb-10">
        <div>
          <h1 className="text-5xl font-serif mb-2">{profile.name}</h1>
          <p className="text-xl font-medium text-gray-700">{profile.title}</p>
        </div>
        <div className="text-right text-sm">
          <p>{profile.email}</p>
          <p>{profile.location}</p>
          <p>Portfolio: youhannamaher.github.io/fabula-portfolio</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1 border-r border-gray-200 pr-10">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-6">About</h2>
          <p className="text-sm leading-relaxed mb-10">{profile.about}</p>

          <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Skills</h2>
          <div className="space-y-2 mb-10">
            {profile.skills.map(s => (
              <p key={s.title} className="text-sm">• {s.title}</p>
            ))}
          </div>

          <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Languages</h2>
          <div className="space-y-1">
            {profile.languages.map(l => (
              <p key={l.name} className="text-sm"><strong>{l.name}:</strong> {l.level}</p>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-6">Projects & Practice</h2>
          <div className="space-y-10">
            {profile.projects.map(p => (
              <div key={p.title} className="print-break-inside-avoid">
                <h3 className="text-lg font-bold">{p.title} — <span className="font-normal italic">{p.category}</span></h3>
                <p className="text-xs text-gray-500 mb-2">Role: {p.role} | Tools: {p.tools}</p>
                <p className="text-sm leading-relaxed">{p.objective}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold uppercase tracking-widest mt-12 mb-6">Experience</h2>
          <div className="space-y-6">
            {profile.experience.map(e => (
              <div key={e.company + e.role} className="print-break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-md font-bold">{e.role}</h3>
                  <span className="text-xs font-mono">{e.period}</span>
                </div>
                <p className="text-sm font-medium mb-1">{e.company}</p>
                <p className="text-xs text-gray-600">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-gray-100 text-center text-[10px] text-gray-400">
        Professional Practice & Portfolio — Fabula Ayman | Content Creator, Scriptwriter & Creative.
      </div>
    </div>
  );
};

export default PrintSection;

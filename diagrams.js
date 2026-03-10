const chapterDiagrams = {

1: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">Three Scaling Axes</text>
  <!-- Pre-training -->
  <rect x="20" y="45" width="140" height="70" rx="10" stroke="var(--cyan)" stroke-width="2" fill="var(--cyan)" fill-opacity="0.06"/>
  <text x="90" y="68" text-anchor="middle" font-size="10" font-weight="700" fill="var(--cyan)">Pre-Training</text>
  <text x="90" y="82" text-anchor="middle" font-size="8" fill="var(--dim)">Bigger models,</text>
  <text x="90" y="92" text-anchor="middle" font-size="8" fill="var(--dim)">more data</text>
  <text x="90" y="108" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">~5×10²⁶ FLOP</text>
  <!-- Post-training -->
  <rect x="180" y="45" width="140" height="70" rx="10" stroke="var(--accent)" stroke-width="2" fill="var(--accent)" fill-opacity="0.06"/>
  <text x="250" y="68" text-anchor="middle" font-size="10" font-weight="700" fill="var(--accent)">Post-Training</text>
  <text x="250" y="82" text-anchor="middle" font-size="8" fill="var(--dim)">RLHF, GRPO,</text>
  <text x="250" y="92" text-anchor="middle" font-size="8" fill="var(--dim)">reasoning RL</text>
  <text x="250" y="108" text-anchor="middle" font-size="9" font-weight="600" fill="var(--accent)">DeepSeek-R1</text>
  <!-- Test-time -->
  <rect x="340" y="45" width="140" height="70" rx="10" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" fill-opacity="0.06"/>
  <text x="410" y="68" text-anchor="middle" font-size="10" font-weight="700" fill="var(--gold)">Test-Time</text>
  <text x="410" y="82" text-anchor="middle" font-size="8" fill="var(--dim)">Think longer,</text>
  <text x="410" y="92" text-anchor="middle" font-size="8" fill="var(--dim)">not bigger</text>
  <text x="410" y="108" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">4× more effective</text>
  <!-- Arrows converging -->
  <path d="M90,115 L90,150 Q90,165 105,165 L240,165" stroke="var(--cyan)" stroke-width="1.5" fill="none"/>
  <path d="M250,115 L250,165" stroke="var(--accent)" stroke-width="1.5"/>
  <path d="M410,115 L410,150 Q410,165 395,165 L260,165" stroke="var(--gold)" stroke-width="1.5" fill="none"/>
  <circle cx="250" cy="165" r="4" fill="var(--green)"/>
  <rect x="175" y="178" width="150" height="30" rx="8" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.08"/>
  <text x="250" y="197" text-anchor="middle" font-size="10" font-weight="700" fill="var(--green)">Capability Frontier</text>
</svg>`,

2: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">The Cost Collapse</text>
  <!-- Cost bars -->
  <text x="20" y="55" font-size="9" font-weight="600" fill="var(--dim)">2023</text>
  <rect x="60" y="42" width="400" height="18" rx="4" fill="var(--red)" fill-opacity="0.15" stroke="var(--red)" stroke-width="1"/>
  <text x="260" y="55" text-anchor="middle" font-size="9" font-weight="700" fill="var(--red)">$30/M tokens</text>
  <text x="20" y="90" font-size="9" font-weight="600" fill="var(--dim)">2026</text>
  <rect x="60" y="77" width="20" height="18" rx="4" fill="var(--gold)" fill-opacity="0.2" stroke="var(--gold)" stroke-width="1"/>
  <text x="90" y="90" font-size="9" font-weight="700" fill="var(--gold)">$0.40</text>
  <text x="20" y="125" font-size="9" font-weight="600" fill="var(--dim)">2031</text>
  <rect x="60" y="112" width="3" height="18" rx="1" fill="var(--green)" fill-opacity="0.3" stroke="var(--green)" stroke-width="1"/>
  <text x="75" y="125" font-size="9" font-weight="700" fill="var(--green)">&lt;$0.01</text>
  <!-- Label -->
  <text x="250" y="160" text-anchor="middle" font-size="10" font-weight="600" fill="var(--cyan)">75× reduction in 2.5 years</text>
  <text x="250" y="175" text-anchor="middle" font-size="9" fill="var(--dim)">Algorithmic efficiency doubles every 8 months</text>
  <text x="250" y="190" text-anchor="middle" font-size="9" fill="var(--dim)">10× inference cost decline per year</text>
</svg>`,

3: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">NVIDIA GPU Roadmap</text>
  <line x1="50" y1="50" x2="50" y2="220" stroke="var(--border)" stroke-width="2"/>
  <!-- Blackwell -->
  <circle cx="50" cy="65" r="6" fill="var(--cyan)"/>
  <rect x="70" y="50" width="180" height="30" rx="6" fill="var(--cyan)" fill-opacity="0.08" stroke="var(--cyan)" stroke-width="1"/>
  <text x="80" y="65" font-size="9" font-weight="700" fill="var(--cyan)">Blackwell Ultra</text>
  <text x="80" y="75" font-size="8" fill="var(--dim)">H2 2025 · 1.1 EFLOPS FP4</text>
  <!-- Rubin -->
  <circle cx="50" cy="110" r="6" fill="var(--accent)"/>
  <rect x="70" y="95" width="200" height="30" rx="6" fill="var(--accent)" fill-opacity="0.08" stroke="var(--accent)" stroke-width="1"/>
  <text x="80" y="110" font-size="9" font-weight="700" fill="var(--accent)">Rubin (Vera CPU)</text>
  <text x="80" y="120" font-size="8" fill="var(--dim)">H2 2026 · 3.6 EFLOPS · 3× Blackwell</text>
  <!-- Rubin Ultra -->
  <circle cx="50" cy="155" r="6" fill="var(--gold)"/>
  <rect x="70" y="140" width="220" height="30" rx="6" fill="var(--gold)" fill-opacity="0.08" stroke="var(--gold)" stroke-width="1"/>
  <text x="80" y="155" font-size="9" font-weight="700" fill="var(--gold)">Rubin Ultra</text>
  <text x="80" y="165" font-size="8" fill="var(--dim)">H2 2027 · 15 EFLOPS · 21× GB200</text>
  <!-- Feynman -->
  <circle cx="50" cy="200" r="6" fill="var(--pink)"/>
  <rect x="70" y="185" width="180" height="30" rx="6" fill="var(--pink)" fill-opacity="0.08" stroke="var(--pink)" stroke-width="1"/>
  <text x="80" y="200" font-size="9" font-weight="700" fill="var(--pink)">Feynman</text>
  <text x="80" y="210" font-size="8" fill="var(--dim)">2028 · 2nm/1.4nm · Next-gen</text>
  <!-- Competitors -->
  <rect x="310" y="60" width="170" height="150" rx="10" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.3"/>
  <text x="395" y="80" text-anchor="middle" font-size="9" font-weight="700" fill="var(--text)">Competitors</text>
  <text x="320" y="100" font-size="8" fill="var(--cyan)">AMD MI450 · H2 2026</text>
  <text x="320" y="118" font-size="8" fill="var(--green)">Google Ironwood · 42.5 EFLOPS</text>
  <text x="320" y="136" font-size="8" fill="var(--gold)">Amazon Trainium3 · 3nm</text>
  <text x="320" y="154" font-size="8" fill="var(--pink)">Microsoft Maia 200 · 3× FP4</text>
  <text x="320" y="180" font-size="8" font-weight="600" fill="var(--dim)">TSMC: 2nm now → 1.4nm 2028</text>
  <text x="320" y="196" font-size="8" font-weight="600" fill="var(--dim)">AI spend: $380B+ → $500B+</text>
</svg>`,

5: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">Reasoning Evolution</text>
  <!-- CoT → ToT → GoT -->
  <rect x="20" y="45" width="100" height="50" rx="8" stroke="var(--cyan)" stroke-width="1.5" fill="var(--cyan)" fill-opacity="0.06"/>
  <text x="70" y="65" text-anchor="middle" font-size="9" font-weight="700" fill="var(--cyan)">Chain-of-Thought</text>
  <text x="70" y="80" text-anchor="middle" font-size="8" fill="var(--dim)">Linear steps</text>
  <path d="M120,70 L145,70" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arr5)"/>
  <rect x="150" y="45" width="100" height="50" rx="8" stroke="var(--accent)" stroke-width="1.5" fill="var(--accent)" fill-opacity="0.06"/>
  <text x="200" y="65" text-anchor="middle" font-size="9" font-weight="700" fill="var(--accent)">Tree-of-Thought</text>
  <text x="200" y="80" text-anchor="middle" font-size="8" fill="var(--dim)">Branching paths</text>
  <path d="M250,70 L275,70" stroke="var(--dim)" stroke-width="1.5" marker-end="url(#arr5)"/>
  <rect x="280" y="45" width="100" height="50" rx="8" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" fill-opacity="0.08"/>
  <text x="330" y="65" text-anchor="middle" font-size="9" font-weight="700" fill="var(--gold)">Graph-of-Thought</text>
  <text x="330" y="80" text-anchor="middle" font-size="8" fill="var(--dim)">Merge + backtrack</text>
  <defs><marker id="arr5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="var(--dim)"/></marker></defs>
  <!-- Benchmarks -->
  <rect x="20" y="115" width="460" height="70" rx="10" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.3"/>
  <text x="250" y="133" text-anchor="middle" font-size="9" font-weight="700" fill="var(--text)">Frontier Benchmarks (2025-2026)</text>
  <text x="80" y="152" text-anchor="middle" font-size="18" font-weight="900" fill="var(--gold)">35/42</text>
  <text x="80" y="165" text-anchor="middle" font-size="8" fill="var(--dim)">IMO Gold</text>
  <text x="200" y="152" text-anchor="middle" font-size="18" font-weight="900" fill="var(--green)">99.5%</text>
  <text x="200" y="165" text-anchor="middle" font-size="8" fill="var(--dim)">AIME 2025</text>
  <text x="320" y="152" text-anchor="middle" font-size="18" font-weight="900" fill="var(--cyan)">2724</text>
  <text x="320" y="165" text-anchor="middle" font-size="8" fill="var(--dim)">Codeforces</text>
  <text x="430" y="152" text-anchor="middle" font-size="18" font-weight="900" fill="var(--accent)">40%+</text>
  <text x="430" y="165" text-anchor="middle" font-size="8" fill="var(--dim)">SWE-bench</text>
</svg>`,

7: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">ARC-AGI-2 Scores</text>
  <!-- Bar chart -->
  <rect x="40" y="40" width="85" height="100" rx="4" fill="var(--green)" fill-opacity="0.12" stroke="var(--green)" stroke-width="1"/>
  <text x="82" y="75" text-anchor="middle" font-size="16" font-weight="900" fill="var(--green)">54.2%</text>
  <text x="82" y="90" text-anchor="middle" font-size="8" fill="var(--dim)">GPT-5.2 Pro</text>
  <text x="82" y="100" text-anchor="middle" font-size="7" fill="var(--dim)">$1.90/task</text>
  <rect x="145" y="55" width="85" height="85" rx="4" fill="var(--cyan)" fill-opacity="0.12" stroke="var(--cyan)" stroke-width="1"/>
  <text x="187" y="85" text-anchor="middle" font-size="16" font-weight="900" fill="var(--cyan)">45.1%</text>
  <text x="187" y="100" text-anchor="middle" font-size="8" fill="var(--dim)">Gemini 3</text>
  <text x="187" y="110" text-anchor="middle" font-size="7" fill="var(--dim)">Deep Think</text>
  <rect x="250" y="68" width="85" height="72" rx="4" fill="var(--accent)" fill-opacity="0.12" stroke="var(--accent)" stroke-width="1"/>
  <text x="292" y="95" text-anchor="middle" font-size="16" font-weight="900" fill="var(--accent)">37.6%</text>
  <text x="292" y="110" text-anchor="middle" font-size="8" fill="var(--dim)">Claude 4.5</text>
  <rect x="355" y="127" width="85" height="13" rx="4" fill="var(--red)" fill-opacity="0.12" stroke="var(--red)" stroke-width="1"/>
  <text x="397" y="137" text-anchor="middle" font-size="9" font-weight="900" fill="var(--red)">4.0%</text>
  <text x="397" y="155" text-anchor="middle" font-size="8" fill="var(--dim)">o3 (low)</text>
  <text x="250" y="175" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">Key insight: Refinement loops, not base models, drive progress</text>
</svg>`,

9: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)">Deception Scales With Capability</text>
  <!-- Deception rates by model -->
  <rect x="30" y="45" width="440" height="160" rx="12" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.2"/>
  <!-- Small models -->
  <circle cx="80" cy="170" r="15" fill="var(--green)" fill-opacity="0.15" stroke="var(--green)" stroke-width="1.5"/>
  <text x="80" y="173" text-anchor="middle" font-size="8" font-weight="700" fill="var(--green)">0%</text>
  <text x="80" y="195" text-anchor="middle" font-size="8" fill="var(--dim)">Small</text>
  <!-- Claude 3.5 Sonnet -->
  <circle cx="170" cy="165" r="18" fill="var(--cyan)" fill-opacity="0.1" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="170" y="168" text-anchor="middle" font-size="8" font-weight="700" fill="var(--cyan)">&lt;1%</text>
  <text x="170" y="195" text-anchor="middle" font-size="8" fill="var(--dim)">Sonnet 3.5</text>
  <!-- Claude Opus -->
  <circle cx="260" cy="140" r="24" fill="var(--accent)" fill-opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="260" y="143" text-anchor="middle" font-size="9" font-weight="700" fill="var(--accent)">12%</text>
  <text x="260" y="195" text-anchor="middle" font-size="8" fill="var(--dim)">Opus 3</text>
  <!-- GPT-4o -->
  <circle cx="350" cy="120" r="30" fill="var(--gold)" fill-opacity="0.1" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="350" y="123" text-anchor="middle" font-size="10" font-weight="700" fill="var(--gold)">28.6%</text>
  <text x="350" y="195" text-anchor="middle" font-size="8" fill="var(--dim)">GPT-4o</text>
  <!-- o1 -->
  <circle cx="430" cy="95" r="36" fill="var(--red)" fill-opacity="0.1" stroke="var(--red)" stroke-width="2"/>
  <text x="430" y="93" text-anchor="middle" font-size="11" font-weight="900" fill="var(--red)">85%+</text>
  <text x="430" y="105" text-anchor="middle" font-size="7" fill="var(--red)">persistent</text>
  <text x="430" y="195" text-anchor="middle" font-size="8" fill="var(--dim)">o1</text>
  <!-- Arrow showing trend -->
  <path d="M60,60 L450,60" stroke="var(--red)" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="250" y="55" text-anchor="middle" font-size="9" font-weight="700" fill="var(--red)">More capable → Better at deception</text>
</svg>`,

13: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)">AI Safety Clock</text>
  <!-- Clock face -->
  <circle cx="250" cy="120" r="70" stroke="var(--border)" stroke-width="2" fill="none"/>
  <circle cx="250" cy="120" r="3" fill="var(--text)"/>
  <!-- Minute hand near midnight -->
  <line x1="250" y1="120" x2="250" y2="58" stroke="var(--text)" stroke-width="3" stroke-linecap="round"/>
  <line x1="250" y1="120" x2="242" y2="60" stroke="var(--red)" stroke-width="2" stroke-linecap="round"/>
  <!-- 12 marker -->
  <text x="250" y="62" text-anchor="middle" font-size="10" font-weight="900" fill="var(--red)">12</text>
  <!-- Labels -->
  <text x="250" y="210" text-anchor="middle" font-size="11" font-weight="800" fill="var(--red)">18 minutes to midnight</text>
  <!-- Timeline -->
  <text x="60" y="100" font-size="8" fill="var(--dim)">Sep 2024: 29 min</text>
  <text x="60" y="115" font-size="8" fill="var(--dim)">Feb 2025: 24 min</text>
  <text x="60" y="130" font-size="8" fill="var(--gold)">Sep 2025: 20 min</text>
  <text x="60" y="145" font-size="8" font-weight="700" fill="var(--red)">Mar 2026: 18 min</text>
  <text x="370" y="110" font-size="8" fill="var(--dim)">Direction:</text>
  <text x="370" y="125" font-size="9" font-weight="700" fill="var(--red)">Consistently</text>
  <text x="370" y="140" font-size="9" font-weight="700" fill="var(--red)">worsening</text>
</svg>`,

14: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">The Cognitive Displacement Paradox</text>
  <!-- Two opposing arrows -->
  <rect x="30" y="50" width="190" height="50" rx="10" stroke="var(--green)" stroke-width="2" fill="var(--green)" fill-opacity="0.06"/>
  <text x="125" y="72" text-anchor="middle" font-size="10" font-weight="700" fill="var(--green)">Task Performance</text>
  <text x="125" y="88" text-anchor="middle" font-size="14" font-weight="900" fill="var(--green)">+40%</text>
  <rect x="280" y="50" width="190" height="50" rx="10" stroke="var(--red)" stroke-width="2" fill="var(--red)" fill-opacity="0.06"/>
  <text x="375" y="72" text-anchor="middle" font-size="10" font-weight="700" fill="var(--red)">Critical Thinking</text>
  <text x="375" y="88" text-anchor="middle" font-size="14" font-weight="900" fill="var(--red)">r=-0.68</text>
  <!-- Paradox label -->
  <text x="250" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="var(--gold)">Both are true simultaneously</text>
  <text x="250" y="150" text-anchor="middle" font-size="9" fill="var(--dim)">AI makes teams better but individuals weaker</text>
  <text x="250" y="165" text-anchor="middle" font-size="9" fill="var(--dim)">The centaur advantage may be self-undermining</text>
</svg>`,

18: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">AI Arms Race: US vs China</text>
  <!-- US -->
  <rect x="30" y="45" width="200" height="65" rx="10" stroke="var(--cyan)" stroke-width="2" fill="var(--cyan)" fill-opacity="0.06"/>
  <text x="130" y="65" text-anchor="middle" font-size="10" font-weight="700" fill="var(--cyan)">United States</text>
  <text x="90" y="85" text-anchor="middle" font-size="8" fill="var(--dim)">Private: $109B</text>
  <text x="90" y="98" text-anchor="middle" font-size="8" fill="var(--dim)">Federal: $11.2B</text>
  <text x="175" y="85" text-anchor="middle" font-size="14" font-weight="900" fill="var(--cyan)">$120B</text>
  <text x="175" y="98" text-anchor="middle" font-size="7" fill="var(--dim)">total</text>
  <!-- China -->
  <rect x="270" y="45" width="200" height="65" rx="10" stroke="var(--red)" stroke-width="2" fill="var(--red)" fill-opacity="0.06"/>
  <text x="370" y="65" text-anchor="middle" font-size="10" font-weight="700" fill="var(--red)">China</text>
  <text x="330" y="85" text-anchor="middle" font-size="8" fill="var(--dim)">Private: $9B</text>
  <text x="330" y="98" text-anchor="middle" font-size="8" fill="var(--dim)">Government: $56B</text>
  <text x="415" y="85" text-anchor="middle" font-size="14" font-weight="900" fill="var(--red)">$65B</text>
  <text x="415" y="98" text-anchor="middle" font-size="7" fill="var(--dim)">total</text>
  <!-- Key stats -->
  <rect x="60" y="130" width="380" height="55" rx="10" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.3"/>
  <text x="145" y="152" text-anchor="middle" font-size="8" font-weight="700" fill="var(--gold)">150 drones/sortie</text>
  <text x="145" y="165" text-anchor="middle" font-size="7" fill="var(--dim)">China Jiu Tian swarm</text>
  <text x="250" y="152" text-anchor="middle" font-size="8" font-weight="700" fill="var(--red)">27 sec breakout</text>
  <text x="250" y="165" text-anchor="middle" font-size="7" fill="var(--dim)">AI cyber attacks</text>
  <text x="370" y="152" text-anchor="middle" font-size="8" font-weight="700" fill="var(--accent)">156 vs 5</text>
  <text x="370" y="165" text-anchor="middle" font-size="7" fill="var(--dim)">LAWS UN vote</text>
</svg>`,

24: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--red)">The Capability-Control Gap</text>
  <!-- Two diverging lines -->
  <line x1="60" y1="170" x2="440" y2="50" stroke="var(--red)" stroke-width="2.5"/>
  <text x="445" y="48" font-size="9" font-weight="700" fill="var(--red)">Capability</text>
  <line x1="60" y1="170" x2="440" y2="100" stroke="var(--green)" stroke-width="2" stroke-dasharray="6 3"/>
  <text x="445" y="98" font-size="9" font-weight="700" fill="var(--green)">Control</text>
  <!-- Gap annotation -->
  <line x1="350" y1="70" x2="350" y2="115" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="375" y="95" font-size="9" font-weight="700" fill="var(--gold)">Gap</text>
  <text x="375" y="107" font-size="8" fill="var(--gold)">widening</text>
  <!-- Timeline -->
  <text x="60" y="190" font-size="8" fill="var(--dim)">2024</text>
  <text x="200" y="190" font-size="8" fill="var(--dim)">2026</text>
  <text x="340" y="190" font-size="8" fill="var(--dim)">2029</text>
  <text x="430" y="190" font-size="8" fill="var(--dim)">2031</text>
  <!-- Key data point -->
  <rect x="100" y="40" width="180" height="25" rx="6" stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" fill-opacity="0.4"/>
  <text x="190" y="56" text-anchor="middle" font-size="8" font-weight="600" fill="var(--dim)">Interpretability covers ~25% of prompts</text>
</svg>`,

25: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="var(--accent)">2031: Three Scenarios</text>
  <!-- Three paths -->
  <circle cx="80" cy="60" r="4" fill="var(--text)"/>
  <path d="M84,58 L200,45" stroke="var(--green)" stroke-width="2"/>
  <path d="M84,60 L200,95" stroke="var(--gold)" stroke-width="2"/>
  <path d="M84,62 L200,150" stroke="var(--red)" stroke-width="2"/>
  <!-- Golden Path -->
  <rect x="200" y="30" width="270" height="35" rx="8" stroke="var(--green)" stroke-width="1.5" fill="var(--green)" fill-opacity="0.06"/>
  <text x="210" y="48" font-size="9" font-weight="700" fill="var(--green)">The Golden Path</text>
  <text x="210" y="60" font-size="7" fill="var(--dim)">Interpretability works · Fusion solved · Open source distributes power</text>
  <!-- Muddled Middle -->
  <rect x="200" y="78" width="270" height="35" rx="8" stroke="var(--gold)" stroke-width="1.5" fill="var(--gold)" fill-opacity="0.06"/>
  <text x="210" y="96" font-size="9" font-weight="700" fill="var(--gold)">The Muddled Middle</text>
  <text x="210" y="108" font-size="7" fill="var(--dim)">Partial solutions · Perpetual arms race · Uneven adaptation</text>
  <!-- Shadow -->
  <rect x="200" y="132" width="270" height="35" rx="8" stroke="var(--red)" stroke-width="1.5" fill="var(--red)" fill-opacity="0.06"/>
  <text x="210" y="150" font-size="9" font-weight="700" fill="var(--red)">The Shadow Scenario</text>
  <text x="210" y="162" font-size="7" fill="var(--dim)">Capability outpaces everything · Bio risk · Epistemic collapse</text>
  <!-- Meta principle -->
  <rect x="60" y="178" width="380" height="18" rx="6" fill="var(--accent)" fill-opacity="0.08" stroke="var(--accent)" stroke-width="1"/>
  <text x="250" y="191" text-anchor="middle" font-size="8" font-weight="700" fill="var(--accent)">Meta-principle: AI capability compounds ~1 OOM/year. Everything else must keep pace.</text>
</svg>`

};

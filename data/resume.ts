import { HeartPulse, Building2, ShieldCheck, GraduationCap, Landmark, BarChart3, Microscope, Cpu, Handshake, Syringe, Wind, Activity } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Sumit Kumar Pandey',
  title: 'Public Health Strategist | Health Systems Strengthening | Quality Improvement',
  // contact is base64-encoded and decoded in the browser (see components/Contact.tsx)
  phoneB64: 'KzkxIDk5NzcwMjU4NTY=', emailB64: 'c3VtaXRrdW1hcnBhbmRleTc4NkBnbWFpbC5jb20=', resumeUpdated: 'November 2026',
  linkedin: 'https://www.linkedin.com/in/sumitkpandey1/', resume: '/Sumit_Kumar_Pandey_CV.pdf',
  summary: 'Public health strategist and health-systems consultant with 10+ years leading facility- and state-level health system strengthening, quality-of-care, and maternal-newborn health (MNH)/NCD initiatives across government-embedded Technical Support Units (NHM, USAID, BMGF). Proven track record of institutionalizing clinical governance, capacity-building, and M&E systems that have measurably improved maternal, neonatal, and disease-program outcomes at scale.',
};

export type Expertise = [LucideIcon, string, string];
export const expertise: Expertise[] = [
  [Building2,'Health Systems Strengthening','Facility-based care transformation'],
  [HeartPulse,'Maternal, Newborn & Child Health','Program design and implementation'],
  [ShieldCheck,'Quality Assurance & Accreditation','NQAS, LaQshya, facility QA audits'],
  [GraduationCap,'Clinical Governance & Capacity Building','Institutional strengthening'],
  [Landmark,'Government Engagement & Policy','NHM, RMNCH+A advisory'],
  [BarChart3,'M&E and Data-Driven Decisions','Dashboards and surveillance analytics'],
  [Microscope,'Outbreak Investigation & Surveillance','Disease surveillance, One Health'],
  [Cpu,'Digital Health & Innovation','Operational intelligence'],
  [Handshake,'Donor Partnerships','USAID, BMGF, WHO-aligned'],
];
export type Experience = { role: string; org: string; place: string; date: string; pts: string[] };
export const experience: Experience[] = [
  { role:'State Lead / Technical Officer', org:'JHPIEGO (TSU to Govt. of Gujarat, USAID RISE)', place:'Gujarat / New Delhi', date:'Jun 2022 – Aug 2024', pts:[
    'Steered PM-ABHIM health system strengthening strategy with the Government of Gujarat.',
    'Led setup and operationalization of an NGS laboratory under PM-ABHIM.',
    'Raised treatment adherence from 48% to 82% by digitizing patient tracking; defaults fell 27%.',
    'Supported NQAS-aligned facility QA, supportive supervision and mentorship visits.']},
  { role:'State Program Manager', org:'Piramal Swasthya (TSU to Govt. of Bihar, BMGF)', place:'Patna', date:'Mar 2021 – Jun 2022', pts:[
    'Directed multi-departmental initiatives with the State Health Society.',
    'Built dashboards and M&E reporting, improving tracking efficiency by 40%.',
    'Ran a capacity-building program for 1,485 government officials.',
    'Achieved 95% milestone delivery through bi-weekly donor and government reviews.']},
  { role:'Technical Associate', org:'Indian Health Action Trust (UP TSU, BMGF)', place:'Lucknow', date:'Nov 2020 – Mar 2021', pts:[
    'Surveillance analytics flagging underperforming districts and blocks.',
    'Institutionalized training frameworks for 52,000 ASHA workers.',
    'Embedded data-driven insights into NRHM action plans for maternal and neonatal health.']},
  { role:'District Program Manager', org:'Tata Trusts (ACF)', place:'Chandrapur', date:'Oct 2019 – Nov 2020', pts:[
    'Led Cancer Care program, achieving Maharashtra’s top rank in cancer detection.',
    'Designed a PPP model integrating three national schemes, benefiting 70,000+ adolescents.',
    'Led district COVID-19 surveillance, cluster mapping and spatial analysis.']},
  { role:'District Technical Officer', org:'CARE USA (TSU to Govt. of Bihar, BMGF)', place:'Madhubani', date:'Aug 2017 – Oct 2019', pts:[
    'Led the B-CQI project with the Institute for Healthcare Improvement (USA).',
    'Delivered 10+ patient-flow reforms that reduced maternal and child mortality.',
    'Ran NQAS/LaQshya-type gap assessments, built facility QA teams, tracked gap closure.',
    'Mentored nurses and doctors on EmONC and infection prevention.']},
  { role:'Assistant Professor, Pharmacology', org:'TIT Group of Institutions', place:'Bhopal', date:'Jun 2013 – Jul 2015', pts:[
    'Supervised oncology pharmacology research and mentored postgraduate scholars.',
    'Organized health outreach linking academic research to care delivery.']},
];
export type Education = [string, string, string, string];
export const education: Education[] = [
  ['MBA, International Health Management','ESCP Business School, Paris/London','Sep 2024 – Jul 2026','GMAT Focus 715 (99th percentile)'],
  ['Master of Public Health','Indian Institute of Public Health, Gandhinagar','Aug 2015 – Jul 2017',''],
  ['M.Pharm','Rajiv Gandhi Technical University, Bhopal','Jul 2011 – Jun 2013',''],
  ['B.Pharm','Rajiv Gandhi Technical University, Bhopal','Jul 2007 – Jun 2011',''],
  ['Quality Improvement in Health Care Systems','Institute for Healthcare Improvement, USA','2018','Certification'],
  ['Fellowship in Organizational Development','','Jan 2022 – Jan 2023','Fellowship'],
];
export const skills = ['SPSS','SAS','Epi-Info','MS Excel / Word / PPT','Google Data Studio','Hindi (Native)','English (Proficient)','French (Beginner)','Member, State Public Health Observation Team (SPOT), NCDC'];

export type Metric = { from?: number; to: number; suffix?: string; label: string };
export const metrics: Metric[] = [
  { from:18000, to:32000, label:'COVID-19 samples tested per day' },
  { from:38, to:87, suffix:'%', label:'Vaccination coverage' },
  { from:48, to:82, suffix:'%', label:'Treatment adherence' },
  { to:134, label:'PSA oxygen plants through partnerships' },
  { to:52000, label:'ASHA workers covered by training frameworks' },
  { to:70000, suffix:'+', label:'Adolescents reached via a PPP model' },
  { to:2000, suffix:'+', label:'Officials, doctors and nurses trained' },
  { to:40, suffix:'%', label:'Better program tracking efficiency' },
];
export type CaseStudy = { icon: LucideIcon; title: string; focus: string; action: string; result: string };
export const cases: CaseStudy[] = [
  { icon:Wind, title:'Oxygen security and a state command centre', focus:'Strengthening the state emergency health response.', action:'Directed cross-sectoral partnerships and supported India’s first Health Control & Command Centre.', result:'134 PSA oxygen plants and a stronger emergency response ecosystem.' },
  { icon:Syringe, title:'COVID-19 testing and vaccination', focus:'Scaling testing capacity and vaccination coverage.', action:'Expanded testing and vaccination delivery and put ICU quality-monitoring systems in place.', result:'Testing 18,000 to 32,000 samples/day; coverage 38% to 87%.' },
  { icon:Activity, title:'Digitized treatment adherence', focus:'Keeping patients on treatment and closing diagnostic gaps.', action:'Digitized patient tracking and counselling; linked AI-flagged presumptive cases to confirmation and treatment.', result:'Adherence 48% to 82%; default rates down 27%.' },
  { icon:HeartPulse, title:'Quality of care in Bihar facilities', focus:'Reducing maternal and child mortality in district facilities.', action:'Led B-CQI with the Institute for Healthcare Improvement; ran NQAS/LaQshya-type gap assessments and built facility QA teams.', result:'10+ operational reforms that reduced maternal and child mortality.' },
];

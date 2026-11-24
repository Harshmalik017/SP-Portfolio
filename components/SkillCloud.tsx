type SkillCloudProps = {
  items: readonly string[];
};

export default function SkillCloud({ items }: SkillCloudProps) {
  return (
    <div className="skill-cloud" aria-label="Skills and methods">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}

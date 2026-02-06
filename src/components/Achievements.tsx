import { Trophy, Code, Target } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "200+ Problems on GeeksforGeeks",
    description: "Solved over 200 Data Structures & Algorithms problems, strengthening problem-solving skills.",
  },
  {
    icon: Target,
    title: "150+ Problems on LeetCode",
    description: "Completed 150+ DSA problems across various difficulty levels on the LeetCode platform.",
  },
  {
    icon: Trophy,
    title: "Top 40 in College",
    description: "Ranked among Top 40 out of 1100+ college students on coding Leaderboard of GeeksforGeeks platform.",
  },
];

const Achievements = () => {
  return (
    <section className="section-container">
      <h2 className="section-heading">
        <span className="text-gradient">Achievements</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="p-6 glass-card hover:border-primary/50 transition-all duration-300 group hover:glow-soft"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <achievement.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {achievement.title}
            </h3>
            <p className="text-muted-foreground text-sm">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

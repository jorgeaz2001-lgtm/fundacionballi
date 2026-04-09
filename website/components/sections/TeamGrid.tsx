import styles from "@/components/sections/TeamGrid.module.css";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

type TeamGridProps = {
  members: TeamMember[];
};

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {members.map((member) => (
          <article key={member.name} className={styles.card}>
            <div className={styles.placeholder} aria-hidden="true" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

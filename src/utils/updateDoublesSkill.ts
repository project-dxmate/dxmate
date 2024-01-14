import { rating, rate } from 'openskill';

export const updateDoublesSkill = (
  {
    winner1Skill,
    winner2Skill,
    loser1Skill,
    loser2Skill
  }: {
    winner1Skill: { mu: number, sigma: number },
    winner2Skill: { mu: number, sigma: number },
    loser1Skill: { mu: number, sigma: number },
    loser2Skill: { mu: number, sigma: number }
  }
) => {
  // Get before rating.
  const wbr1 = rating({ mu: winner1Skill.mu, sigma: winner1Skill.sigma });
  const wbr2 = rating({ mu: winner2Skill.mu, sigma: winner2Skill.sigma });
  const lbr1 = rating({ mu: loser1Skill.mu, sigma: loser1Skill.sigma });
  const lbr2 = rating({ mu: loser2Skill.mu, sigma: loser2Skill.sigma });

  // Update rating.
  const [[war1, war2], [lar1, lar2]] = rate([[wbr1, wbr2], [lbr1, lbr2]]);

  return {
    updatedWinner1Skill: war1,
    updatedWinner2Skill: war2,
    updatedLoser1Skill: lar1,
    updatedLoser2Skill: lar2
  }
}
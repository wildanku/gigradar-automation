import { businessSolution } from "../enums.js";

const findBusinessSolution = (description) => {
  // Guard clause for empty or invalid input
  if (!description || typeof description !== "string") {
    return null;
  }

  // Convert description to lowercase for case-insensitive matching
  const normalizedDesc = description.toLowerCase();

  // Keywords mapping to help with matching
  const keywords = {
    web: ["web", "website", "wordpress", "drupal", "magento", "laravel"],
    mobile: ["mobile", "app", "android", "ios"],
    ai: ["ai", "artificial intelligence", "machine learning", "ml"],
    design: ["design", "ux", "ui", "user experience", "user interface"],
    development: ["development", "dev", "programming"],
    digital: ["digital", "online", "internet"],
    it: ["it", "information technology", "software"],
    data: ["data", "database", "analytics"],
    business: ["business", "b2b", "saas", "enterprise"],
  };

  // Score each solution based on keyword matches
  const scoredSolutions = businessSolution.map((solution) => {
    const normalizedSolution = solution.toLowerCase();
    let score = 0;

    // Score based on keyword categories
    for (const [category, categoryKeywords] of Object.entries(keywords)) {
      const descKeywords = categoryKeywords.filter((keyword) =>
        normalizedDesc.includes(keyword)
      );
      const solutionKeywords = categoryKeywords.filter((keyword) =>
        normalizedSolution.includes(keyword)
      );

      // Add points for matching keywords
      score +=
        descKeywords.filter((k) => solutionKeywords.includes(k)).length * 2;
    }

    // Score based on direct word matches
    const descWords = normalizedDesc.split(" ");
    const solutionWords = normalizedSolution.split(" ");

    descWords.forEach((word) => {
      if (word.length > 2 && solutionWords.includes(word)) {
        score += 1;
      }
    });

    return { solution, score };
  });

  // Sort by score and get the highest scoring solution
  const bestMatch = scoredSolutions.sort((a, b) => b.score - a.score)[0];

  // Return null if no solution had any matching keywords
  return bestMatch.score > 0 ? bestMatch.solution : null;
};

export default findBusinessSolution;

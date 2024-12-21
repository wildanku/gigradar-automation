import moment from "moment";
import getSeniorityLevel from "./decission-making/seniority-level.js";
import findBusinessSolution from "./decission-making/business-solution.js";
import sendTopRatedToZapier from "./zapier-automation.js";

export const getData = async (data) => {
  const status = data?.topRatedStatus === "top_rated" ? "READY" : "";

  const items = [
    data?.ciphertext ?? "", // #
    data.ciphertext ? data.ciphertext.replace("~", "") : "", // Do Not Delete
    data?.shortName ?? "", // TEMP09-shortName
    data?.agencies?.[0]?.name ?? "", // TEMP12-companyFullName
    data?.portrait ?? "", // TEMP15-upworkUrl
    status, // Status
    data?.lastActivity
      ? moment(data?.lastActivity ?? "").format("DD-MM-YYYY")
      : "", // Date
    "", // First name
    "", // Last name
    "", // Freelancer
    "", // Email
    "", // Phone
    data?.agencies?.[0]?.name ?? "", // Company
    data?.title ?? "", // Job Title
    "", // PD11-Department
    data?.workingYears ? getSeniorityLevel(data?.workingYears) : "", // PD12-Seniority-Level
    "", // PD13-Persona
    "", // PC01-Company-Short
    "", // PC02-CompanyS
    "", // PC06-2nd-person-full
    "", // PC07-2nd-person-first
    "", // PC08-Website
    data?.location?.country ?? "", // PD06-Company-Country
    "", // PC10-Company-Linkedin
    "", // PD01-Prospect-Linkedin
    "", // Source URL
    "", // PD07-Industry
    "", // PD09-Company-Size
    data?.extendedAgencies?.[0]?.description
      ? findBusinessSolution(data?.extendedAgencies?.[0]?.description) ?? ""
      : "", // UN01-Solutions
    "", // PD16-SignOff
    "", // PD17-SignOffForward
    "", // PD10-Daytime
    "", // PC03-Client1
    "", // PC04-Client2
    "", // PC05-Client3
    data?.combinedTotalRevenue ?? "", // PD02-combinedTotalRevenue
    data?.totalHourlyJobs ?? "", // PD03-totalHourlyJobs
    data?.combinedRecentEarnings ?? "", // PD14-combinedRecentEarnings
    data?.workingYears ?? "", // TEMP01-workingYears
    data?.avgDeadlinesScore ?? "", // TEMP02-avgDeadlinesScore
    data?.serviceProfileNames ? data?.serviceProfileNames[0] ?? "" : "", // TEMP03-serviceProfileNames
    data?.extendedAgencies?.[0]?.agencyTopRatedStatus ?? "", // TEMP04-agencyTopRatedStatus
    data?.extendedAgencies?.[0]?.summarySanitized ?? "", // TEMP05-summarySanitized
    data?.attrSkills?.[0]?.groupName ?? "", // TEMP06-skill1
    data?.attrSkills?.[1]?.groupName ?? "", // TEMP07-skill2
    data?.memberSince ?? "", // TEMP10-memberSince
    data?.memberSince ?? "", // PD20-memberSince
    data?.combinedRecentEarnings ?? "", // TEMP11-combinedRecentEarnings
    data?.combinedTotalRevenue ?? "", // TEMP13-combinedTotalRevenue
    data?.description ?? "", // TEMP14-description
    data?.avgFeedbackScore ?? "", // TEMP15-avgFeedbackscore
    data?.extendedAgencies?.[0]?.logo ?? "", // PD18-companyLogo
    "", // PC09-Owner
    "", // PD08-Research-Campaign
    moment(new Date()).format("DD/MM/YYYY"), // TEMP16-Created
    "", // Last Modified Date & TIme
  ];

  // if (status === "READY") {
  //   const payload = {
  //     agencyName: data?.agencies?.name ?? "",
  //     freelancerName: data?.shortName ?? "",
  //     upworkUrl: data?.portrait ?? "",
  //     status: "READY",
  //   };

  //   await sendTopRatedToZapier(payload);
  // }

  return items;
};

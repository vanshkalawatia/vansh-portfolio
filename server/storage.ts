import { 
  Experience, InsertExperience, 
  Project, InsertProject, 
  Skill, InsertSkill, 
  PersonalInfo, InsertPersonalInfo,
  experiences, projects, skills, personalInfo 
} from "@shared/schema";
import { db } from "./db";
import {
  personalInfo as CONFIG_PERSONAL_INFO,
  experiencesData as CONFIG_EXPERIENCES,
  projectsData as CONFIG_PROJECTS,
  skillsData as CONFIG_SKILLS,
  blogsData as CONFIG_BLOGS,
  educationData as CONFIG_EDUCATION,
  certificationsData as CONFIG_CERTIFICATIONS,
  interestsData as CONFIG_INTERESTS,
} from "../PORTFOLIO_CONFIG";

export interface IStorage {
  getExperiences(): Promise<Experience[]>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getPersonalInfo(): Promise<PersonalInfo | undefined>;
  getBlogs(): Promise<any[]>;
  getEducation(): Promise<any[]>;
  getCertifications(): Promise<any[]>;
  getInterests(): Promise<any[]>;
  
  createExperience(experience: InsertExperience): Promise<Experience>;
  createProject(project: InsertProject): Promise<Project>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  createPersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo>;
}

export class DatabaseStorage implements IStorage {
  async getExperiences(): Promise<Experience[]> {
    if (!db) return CONFIG_EXPERIENCES as any;
    return await db.select().from(experiences).orderBy(experiences.id);
  }

  async getProjects(): Promise<Project[]> {
    if (!db) return CONFIG_PROJECTS as any;
    return await db.select().from(projects).orderBy(projects.id);
  }

  async getSkills(): Promise<Skill[]> {
    if (!db) return CONFIG_SKILLS as any;
    return await db.select().from(skills).orderBy(skills.id);
  }

  async getPersonalInfo(): Promise<PersonalInfo | undefined> {
    if (!db) return CONFIG_PERSONAL_INFO as any;
    const [info] = await db.select().from(personalInfo).limit(1);
    return info;
  }

  async getBlogs(): Promise<any[]> {
    if (!db) return CONFIG_BLOGS as any;
    return CONFIG_BLOGS;
  }

  async getEducation(): Promise<any[]> {
    return CONFIG_EDUCATION;
  }

  async getCertifications(): Promise<any[]> {
    return CONFIG_CERTIFICATIONS;
  }

  async getInterests(): Promise<any[]> {
    return CONFIG_INTERESTS;
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    if (!db) return experience as Experience;
    const [newExperience] = await db.insert(experiences).values(experience).returning();
    return newExperience;
  }

  async createProject(project: InsertProject): Promise<Project> {
    if (!db) return project as Project;
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    if (!db) return skill as Skill;
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  async createPersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo> {
    if (!db) return info as PersonalInfo;
    const [newInfo] = await db.insert(personalInfo).values(info).returning();
    return newInfo;
  }
}

export const storage = new DatabaseStorage();

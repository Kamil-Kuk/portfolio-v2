export interface Project {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  updated_at: string;
  html_url: string;
  description: string;
  topics: string[];
  language: string;
  preview_url: string;
  image_url: string;
}

export interface Program {
    id: string;
    title: string;
    subtitle: string;
    university: string;
    location: string;
    level: 'Undergraduate' | 'Postgraduate' | 'Masters' | string;
    language: string;
    duration: string;
    tuition?: number;
    housing?: number;
    acceptance?: number;
    application?: number;
    living?: number;
    mode: 'Part-time' | 'Fulltime' | string;
    attendance: 'Online' | 'On-Campus' | 'Hybrid' | string;
    thumbnail?: string;
    description?: string;
    requirements?: string[];
}


export interface ProgramFilter {
    title?: string;
    university?: string;
    location?: string;
    level?: 'Undergraduate' | 'Postgraduate' | 'Masters' | string;
    language?: string;
    mode?: 'Part-time' | 'Fulltime' | string;
    attendance?: 'Online' | 'On-Campus' | 'Hybrid' | string;
}
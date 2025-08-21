import { Program } from 'src/app/core/models/program';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramFilter } from '../models/program';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
    private readonly programUrl = '../../../assets/data/programs.json';

    constructor(private http: HttpClient) {}

    getAll(): Observable<Program[]> {
        return this.http.get<Program[]>(this.programUrl).pipe(
            delay(200)
        );
    }

    getProgramById(id: string): Observable<Program | undefined> {
        return this.getAll().pipe(
            map(programs => programs.find(p => p.id === id)),
            delay(200)
        );
    }

    filterPrograms(query = '', filters: ProgramFilter = {}): Observable<Program[]> {
        const q = query.trim().toLowerCase();
        return this.getAll().pipe(
            map(list =>
                list.filter(p =>
                    (!q ||
                        p.title.toLowerCase().includes(q) ||
                        p.university.toLowerCase().includes(q) ||
                        p.location.toLowerCase().includes(q)) &&
                    (!filters.title || p.title.toLowerCase().includes(filters.title.toLowerCase())) &&
                    (!filters.university || p.university.toLowerCase().includes(filters.university.toLowerCase())) &&
                    (!filters.location || p.location.toLowerCase().includes(filters.location.toLowerCase())) &&
                    (!filters.level || p.level === filters.level) &&
                    (!filters.language || p.language.toLowerCase() === filters.language.toLowerCase()) &&
                    (!filters.mode || p.mode === filters.mode) &&
                    (!filters.attendance || p.attendance === filters.attendance
                    )
                )
            )
        )
    }
}

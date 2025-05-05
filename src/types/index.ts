// Define user roles based on the database schema Type_User
export type UserRole = 'Admin' | 'Patient' | 'Nurse' | 'Secretary' | 'Doctor';

// You can expand this file later to include interfaces for other entities
// like Patient, Appointment, Hospital, etc., mirroring the DB schema.

export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: UserRole;
  // Add other relevant user fields from Utilisateur table
}

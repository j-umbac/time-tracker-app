// Global state for logged in user
export const useCurrentUser = () => useState('user', () => ({}))
// Global state for user's projects
export const useUserProjects = () => useState('userProjectList', () => ([]))
//Global state for projects
export const useProjects = () => useState('projectList', () => ([]))
//Global state for projects not joined by current user
export const useOtherProjects = () => useState('otherProjects', () => ([]))
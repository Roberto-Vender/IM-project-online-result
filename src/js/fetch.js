const base_url = "http://localhost:8000/api/";

export async function getAllService() {
    const response = await fetch(base_url + 'Service');
    return await response.json();
}
export async function getAllAdmin() {
    const response = await fetch(base_url + 'Admin');
    return await response.json();
}
export async function getAllAppointment() {
    const response = await fetch(base_url + 'Appointment');
    return await response.json();
}
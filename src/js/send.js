const base_url = "http://localhost:8000/api/";

export async function login(data) {
    const response = await fetch(base_url + "Admin/Login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}
export async function addService(data) {
    const response = await fetch(base_url + "Service", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}
export async function addAdmin(data) {
    const response = await fetch(base_url + "Admin", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}
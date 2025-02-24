import { IBirthdayLog } from "../Pages/Logs/interface";


export const birthdayLogsMocks: IBirthdayLog[] = [
    {
        id: 1,
        phone_number: "123-456-7890",
        account_name: "John Doe",
        status: "Active",
        created_at: "2025-02-24T08:30:00Z",
        client_type: "Premium",
        email: "john.doe@example.com",
        dateOfBirth: "1990-06-15"
    },
    {
        id: 2,
        phone_number: "987-654-3210",
        account_name: "Jane Smith",
        status: "Inactive",
        created_at: "2024-11-12T09:00:00Z",
        client_type: "Standard",
        email: "jane.smith@example.com",
        dateOfBirth: "1985-03-22"
    },
    {
        id: 3,
        phone_number: "555-123-4567",
        account_name: "Alice Johnson",
        status: "Active",
        created_at: "2023-06-30T11:45:00Z",
        client_type: "Premium",
        email: "alice.johnson@example.com",
        dateOfBirth: "1992-08-10"
    },
    {
        id: 4,
        phone_number: "555-987-6543",
        account_name: "Bob Williams",
        status: "Suspended",
        created_at: "2022-09-25T10:00:00Z",
        client_type: "Basic",
        email: "bob.williams@example.com",
        dateOfBirth: "1980-12-05"
    },
    {
        id: 5,
        phone_number: "333-444-5555",
        account_name: "Charlie Brown",
        status: "Active",
        created_at: "2021-12-20T07:30:00Z",
        client_type: "Standard",
        email: "charlie.brown@example.com",
        dateOfBirth: "1995-01-30"
    }
];

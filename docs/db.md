# Events Admin Dashboard Database Schema

This document outlines the database schema for the **Events Admin Dashboard**, which manages events, artists, clubs, offers, invoices, and related entities.

---

## Tables Overview

### 1. **Users**
Manages users of the platform.

| Column          | Type         | Constraints                     |
|------------------|--------------|----------------------------------|
| `id`            | UUID         | Primary Key                     |
| `name`          | VARCHAR(255) | NOT NULL                        |
| `email`         | VARCHAR(255) | UNIQUE, NOT NULL                |
| `password`      | VARCHAR(255) | NOT NULL                        |
| `role`          | ENUM         | Values: `admin`, `manager`      |
| `created_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |
| `updated_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |

---

### 2. **Artists**
Manages artists performing at events.

| Column          | Type         | Constraints                     |
|------------------|--------------|----------------------------------|
| `id`            | UUID         | Primary Key                     |
| `name`          | VARCHAR(255) | NOT NULL                        |
| `genre`         | VARCHAR(255) | NULL                            |
| `bio`           | TEXT         | NULL                            |
| `image_url`     | VARCHAR(255) | NULL                            |
| `created_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |
| `updated_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |

---

### 3. **Clubs**
Manages information about clubs.

| Column          | Type         | Constraints                     |
|------------------|--------------|----------------------------------|
| `id`            | UUID         | Primary Key                     |
| `name`          | VARCHAR(255) | NOT NULL                        |
| `location`      | VARCHAR(255) | NULL                            |
| `capacity`      | INT          | NULL                            |
| `description`   | TEXT         | NULL                            |
| `created_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |
| `updated_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |

---

### 4. **Events**
Manages events hosted at clubs with artists.

| Column          | Type         | Constraints                     |
|------------------|--------------|----------------------------------|
| `id`            | UUID         | Primary Key                     |
| `name`          | VARCHAR(255) | NOT NULL                        |
| `club_id`       | UUID         | Foreign Key (`clubs.id`)        |
| `date`          | TIMESTAMP    | NOT NULL                        |
| `description`   | TEXT         | NULL                            |
| `created_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |
| `updated_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |

#### Relationships:
- **One-to-Many**: One club can host many events.
- **Many-to-Many**: Events can have multiple artists.

---

### 5. **Event_Artists (Pivot Table)**
Manages the many-to-many relationship between events and artists.

| Column          | Type         | Constraints                     |
|------------------|--------------|----------------------------------|
| `event_id`      | UUID         | Foreign Key (`events.id`)       |
| `artist_id`     | UUID         | Foreign Key (`artists.id`)      |

---

### 6. **Offers**
Manages offers and discounts for events.

| Column          | Type         | Constraints                     |
|------------------|--------------|----------------------------------|
| `id`            | UUID         | Primary Key                     |
| `event_id`      | UUID         | Foreign Key (`events.id`)       |
| `title`         | VARCHAR(255) | NOT NULL                        |
| `discount`      | DECIMAL(5,2) | NOT NULL                        |
| `start_date`    | TIMESTAMP    | NOT NULL                        |
| `end_date`      | TIMESTAMP    | NOT NULL                        |
| `created_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |
| `updated_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |

---

### 7. **Invoices**
Manages invoices for event bookings or services.

| Column          | Type         | Constraints                     |
|------------------|--------------|----------------------------------|
| `id`            | UUID         | Primary Key                     |
| `user_id`       | UUID         | Foreign Key (`users.id`)        |
| `event_id`      | UUID         | Foreign Key (`events.id`)       |
| `amount`        | DECIMAL(10,2)| NOT NULL                        |
| `status`        | ENUM         | Values: `pending`, `paid`       |
| `created_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |
| `updated_at`    | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP       |

---

## Relationships

1. **Users → Invoices**: One user can have many invoices.
2. **Clubs → Events**: One club can host many events.
3. **Events → Artists**: Many-to-Many relationship through the `Event_Artists` table.
4. **Events → Offers**: One event can have multiple offers.
5. **Events → Invoices**: One event can generate many invoices.

---

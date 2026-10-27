# Parking Lot Database Schema

## A. parking_lots

| Column | Type | Constraint |
| --- | --- | --- |
| `id` | `BIGSERIAL` | Primary Key |
| `name` | `VARCHAR(100)` | NOT NULL |
| `address` | `TEXT` | — |
| `created_at` | `TIMESTAMPTZ` | DEFAULT NOW() |

## B. parking_floors

| Column | Type | Constraint |
| --- | --- | --- |
| `id` | `BIGSERIAL` | Primary Key |
| `lot_id` | `BIGINT` | FK → parking_lots |
| `floor_number` | `INT` | NOT NULL |
| `is_active` | `BOOLEAN` | DEFAULT TRUE |

Unique constraint: (lot_id, floor_number).

## C. parking_spots

| Column | Type | Constraint |
| --- | --- | --- |
| `id` | `BIGSERIAL` | Primary Key |
| `floor_id` | `BIGINT` | FK → parking_floors |
| `spot_number` | `VARCHAR(20)` | NOT NULL |
| `spot_type` | `VARCHAR(20)` | CAR / BIKE / TRUCK |
| `status` | `VARCHAR(20)` | AVAILABLE / OCCUPIED / OUT_OF_SERVICE |

Unique constraint: (floor_id, spot_number).

## D. vehicles

| Column | Type | Constraint |
| --- | --- | --- |
| `id` | `BIGSERIAL` | Primary Key |
| `license_plate` | `VARCHAR(20)` | UNIQUE |
| `vehicle_type` | `VARCHAR(20)` | NOT NULL |

## E. parking_tickets

This is the most important table.

| Column | Type | Constraint |
| --- | --- | --- |
| `id` | `BIGSERIAL` | Primary Key |
| `vehicle_id` | `BIGINT` | FK → vehicles |
| `spot_id` | `BIGINT` | FK → parking_spots |
| `entry_time` | `TIMESTAMPTZ` | DEFAULT NOW() |
| `exit_time` | `TIMESTAMPTZ` | NULL until exit |
| `status` | `VARCHAR(20)` | ACTIVE / CLOSED |
| `total_amount` | `NUMERIC(10,2)` | NULL until calculated |

## F. payments

| Column | Type | Constraint |
| --- | --- | --- |
| `id` | `BIGSERIAL` | Primary Key |
| `ticket_id` | `BIGINT` | FK → parking_tickets |
| `amount` | `NUMERIC(10,2)` | NOT NULL |
| `payment_method` | `VARCHAR(20)` | CASH / CARD / UPI |
| `status` | `VARCHAR(20)` | PENDING / SUCCESS / FAILED |
| `created_at` | `TIMESTAMPTZ` | DEFAULT NOW() |

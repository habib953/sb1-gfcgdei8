# Premium Car Showroom SaaS Platform (Algeria)

Production-ready blueprint and starter implementation for a **multi-language (Arabic/French) showroom platform** with:

- Public premium website
- Admin dashboard for inventory management
- SaaS-ready multi-showroom architecture
- PostgreSQL + Prisma backend
- Next.js App Router + Tailwind frontend

## 1) Architecture

### Core layers
1. **Presentation layer (Next.js App Router)**
   - Public routes: `/{locale}`, `/{locale}/cars`, `/{locale}/cars/[slug]`, `/{locale}/about`, `/{locale}/contact`
   - Admin routes: `/admin/cars`, `/admin/cars/new`, `/admin/cars/[id]/edit`
2. **API layer (Route Handlers)**
   - CRUD for cars
   - Filtered retrieval
   - Lead submission
3. **Domain/Application layer (`lib/services`)**
   - Validation, slug generation, showroom scoping, business rules
4. **Data layer (Prisma + PostgreSQL)**
   - Multi-showroom entities + translations + images + leads
5. **Asset layer (Cloudinary)**
   - Image upload/transform and persistent URLs

### SaaS/multi-tenant strategy
- Every business entity includes `showroomId`.
- Admin sessions map to one showroom (or super-admin scope).
- Queries are always showroom-scoped.
- This allows scaling to multi-showroom without re-architecture.

## 2) Data model summary
- `showrooms`: tenant identity
- `admins`: dashboard users
- `brands`: normalized brand list
- `cars`: core listing data
- `car_images`: gallery assets
- `car_translations`: AR/FR localized content
- `leads`: buyer inquiries

## 3) UI structure

### Public
- `Navbar` (logo + language switch AR/FR)
- `Hero`
- `FeaturedCars`
- `BrandsStrip`
- `WhyChooseUs`
- `FilterSidebar`
- `CarCard`
- `GallerySlider`
- `StickyContactBox` + `WhatsAppButton`

### Admin
- `CarTable`
- `CarForm` (AR/FR inputs, specs, pricing)
- `ImageUploader` (multiple)
- `StatusBadge` (`available` / `sold`)

## 4) SEO
- Dynamic metadata per car page
- JSON-LD schema for vehicle listings
- Localized canonical URLs (`/ar/...`, `/fr/...`)
- Sitemap generation

## 5) API endpoints
- `GET /api/cars` with filters
- `GET /api/cars/:id`
- `POST /api/cars`
- `PUT /api/cars/:id`
- `DELETE /api/cars/:id`
- `POST /api/leads`

## 6) Operational readiness
- Add Redis cache later for heavy filtered queries
- Add queue (e.g. BullMQ) for image processing/webhooks
- Add observability (OpenTelemetry + structured logs)
- Add RBAC roles (`owner`, `manager`, `sales`)

See source files in this folder for implementation examples.

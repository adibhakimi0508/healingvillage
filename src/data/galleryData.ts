// src/data/galleryData.ts

export interface GalleryItem {
    file: string;
    title: string;
    date: string; // Format: YYYY-MM-DD
    category: "sosial" | "korporat";
    timestamp: number;
}

// --- HELPER: Generate Bulk Images Automatically ---
const generateBulkImages = (
    start: number,
    end: number,
    prefix: string,
    ext: string,
    title: string,
    date: string,
    category: "sosial" | "korporat"
): GalleryItem[] => {
    const items: GalleryItem[] = [];
    const timestamp = new Date(date).getTime();

    for (let i = start; i <= end; i++) {
        items.push({
            file: `${prefix}${i}.${ext}`, // e.g., sosial39.jpg
            title,
            date,
            category,
            timestamp
        });
    }
    return items;
};

// --- PART 1: Existing Manual Data ---
const existingData: GalleryItem[] = [
    {
        "file": "korporat4.jpg",
        "title": "Healing Village x Virtual Reality Synergy: Redefining the Architecture of Well-Being",
        "date": "2025-12-25",
        "category": "korporat",
        "timestamp": 1766620800000
    },
    {
        "file": "korporat10.jpg",
        "title": "MOU Signing With Scentsess",
        "date": "2025-12-25",
        "category": "korporat",
        "timestamp": 1766620800000
    },
    {
        "file": "korporat28.jpg",
        "title": "MOU Signing With Scentsess",
        "date": "2025-12-25",
        "category": "korporat",
        "timestamp": 1766620800000
    },
    {
        "file": "korporat23.jpg",
        "title": "MOU Signing With Scentsess",
        "date": "2025-12-25",
        "category": "korporat",
        "timestamp": 1766620800000
    },
    {
        "file": "korporat14.jpg",
        "title": "MOU Signing With Scentsess",
        "date": "2025-12-25",
        "category": "korporat",
        "timestamp": 1766620800000
    },
    {
        "file": "korporat29.jpg",
        "title": "Site Visit di Resort Tunamaya Desaru ",
        "date": "2025-12-12",
        "category": "korporat",
        "timestamp": 1765497600000
    },
    {
        "file": "korporat30.jpg",
        "title": "Lawatan Tapak ke CryoCord - Nexea Life Science Accelerator Program",
        "date": "2025-10-17",
        "category": "korporat",
        "timestamp": 1760659200000
    },
    {
        "file": "korporat31.jpg",
        "title": "Lawatan Tapak ke CryoCord - Nexea Life Science Accelerator Program",
        "date": "2025-10-17",
        "category": "korporat",
        "timestamp": 1760659200000
    },
    {
        "file": "korporat32.jpg",
        "title": "Healing Education ESG Tourism: Kolaborasi Bersama Tunamaya Beach & Spa Resort Desaru",
        "date": "2025-10-15",
        "category": "korporat",
        "timestamp": 1760486400000
    },
    {
        "file": "korporat7.jpg",
        "title": "Perbincangan Strategik: HRDC & Community Program Healing Village",
        "date": "2025-10-02",
        "category": "korporat",
        "timestamp": 1759363200000
    },
    {
        "file": "korporat8.jpg",
        "title": "Nafas Tenang x OCBC x National Kidney Foundation",
        "date": "2025-10-02",
        "category": "korporat",
        "timestamp": 1759363200000
    },
    {
        "file": "korporat9.jpg",
        "title": "Nafas Tenang x OCBC x National Kidney Foundation",
        "date": "2025-10-02",
        "category": "korporat",
        "timestamp": 1759363200000
    },
    {
        "file": "korporat9.jpg",
        "title": "Nafas Tenang x OCBC x National Kidney Foundation",
        "date": "2025-09-24",
        "category": "korporat",
        "timestamp": 1758672000000
    },
    {
        "file": "korporat8.jpg",
        "title": "Nafas Tenang x OCBC x National Kidney Foundation",
        "date": "2025-09-24",
        "category": "korporat",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial11.jpg",
        "title": "Town Hall Pemantapan Digital Kementerian Pendidikan Malaysia",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial12.jpg",
        "title": "Town Hall Pemantapan Digital Kementerian Pendidikan Malaysia",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial13.jpg",
        "title": "Town Hall Pemantapan Digital Kementerian Pendidikan Malaysia",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial14.jpg",
        "title": "Town Hall Pemantapan Digital Kementerian Pendidikan Malaysia",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial15.jpg",
        "title": "Town Hall Pemantapan Digital Kementerian Pendidikan Malaysia",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial19.jpg",
        "title": "Town Hall Pemantapan Digital Kementerian Pendidikan Malaysia",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial18.jpg",
        "title": "Town Hall Pemantapan Digital Kementerian Pendidikan Malaysia",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial17.jpg",
        "title": "Town Hall Pemantapan Digital Kementerian Pendidikan Malaysia",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial16.jpg",
        "title": "Town Hall Pemantapan Digital Kementerian Pendidikan Malaysia",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial21.jpg",
        "title": "Meeting Healing VIllage di RRC",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial22.jpg",
        "title": "Meeting Healing VIllage di RRC",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial23.jpg",
        "title": "Meeting Healing VIllage di RRC",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial20.jpg",
        "title": "Meeting Healing VIllage di RRC",
        "date": "2025-09-24",
        "category": "sosial",
        "timestamp": 1758672000000
    },
    {
        "file": "sosial20.jpg",
        "title": "Meeting Healing Village di RRC",
        "date": "2025-08-14",
        "category": "sosial",
        "timestamp": 1755129600000
    },
    {
        "file": "sosial21.jpg",
        "title": "Meeting Healing Village di RRC",
        "date": "2025-08-14",
        "category": "sosial",
        "timestamp": 1755129600000
    },
    {
        "file": "sosial22.jpg",
        "title": "Meeting Healing Village di RRC",
        "date": "2025-08-14",
        "category": "sosial",
        "timestamp": 1755129600000
    },
    {
        "file": "sosial23.jpg",
        "title": "Meeting Healing Village di RRC",
        "date": "2025-08-14",
        "category": "sosial",
        "timestamp": 1755129600000
    },
    {
        "file": "korporat12.jpg",
        "title": "Meeting KTA x Atras",
        "date": "2025-08-26",
        "category": "korporat",
        "timestamp": 1756166400000
    },
    {
        "file": "korporat13.jpg",
        "title": "Meeting KTA x Atras",
        "date": "2025-08-26",
        "category": "korporat",
        "timestamp": 1756166400000
    },
    {
        "file": "korporat11.jpg",
        "title": "Meeting KTA bersama NYCK",
        "date": "2025-08-26",
        "category": "korporat",
        "timestamp": 1756166400000
    },
    {
        "file": "korporat15.jpg",
        "title": "Meeting KTA bersama NYCK",
        "date": "2025-08-26",
        "category": "korporat",
        "timestamp": 1756166400000
    },
    {
        "file": "korporat17.jpg",
        "title": "Meeting KTA bersama NYCK",
        "date": "2025-08-26",
        "category": "korporat",
        "timestamp": 1756166400000
    },
    {
        "file": "korporat16.jpg",
        "title": "Meeting KTA bersama NYCK",
        "date": "2025-08-26",
        "category": "korporat",
        "timestamp": 1756166400000
    },
    {
        "file": "korporat18.jpg",
        "title": "Wellness Tourism: Meeting KTA bersama Mayard Integrated",
        "date": "2025-08-13",
        "category": "korporat",
        "timestamp": 1755043200000
    },
    {
        "file": "korporat19.jpg",
        "title": "Wellness Tourism: Meeting KTA bersama Mayard Integrated",
        "date": "2025-08-13",
        "category": "korporat",
        "timestamp": 1755043200000
    },
    {
        "file": "korporat20.jpg",
        "title": "Wellness Tourism: Meeting KTA bersama Mayard Integrated",
        "date": "2025-08-13",
        "category": "korporat",
        "timestamp": 1755043200000
    },
    {
        "file": "korporat21.jpg",
        "title": "Nafas Kita Jiwa Kita: Breathwork Malaysia",
        "date": "2025-06-05",
        "category": "korporat",
        "timestamp": 1749081600000
    },
    {
        "file": "korporat22.jpg",
        "title": "Nafas Kita Jiwa Kita: Breathwork Malaysia",
        "date": "2025-06-05",
        "category": "korporat",
        "timestamp": 1749081600000
    },
    {
        "file": "sosial25.jpg",
        "title": "Nafas Kita Jiwa Kita: Breathwork Malaysia",
        "date": "2025-06-05",
        "category": "sosial",
        "timestamp": 1749081600000
    },
    {
        "file": "sosial26.jpg",
        "title": "Sesi Nafas Tenang Bersama Warga Emas",
        "date": "2025-06-02",
        "category": "sosial",
        "timestamp": 1748822400000
    },
    {
        "file": "sosial27.jpg",
        "title": "Sesi Nafas Tenang Bersama Warga Emas",
        "date": "2025-06-02",
        "category": "sosial",
        "timestamp": 1748822400000
    },
    {
        "file": "sosial28.jpg",
        "title": "Majlis Doa Selamat & Terlajak Raya",
        "date": "2025-05-02",
        "category": "sosial",
        "timestamp": 1746144000000
    },
    {
        "file": "sosial29.jpg",
        "title": "Majlis Doa Selamat & Terlajak Raya",
        "date": "2025-05-02",
        "category": "sosial",
        "timestamp": 1746144000000
    },
    {
        "file": "sosial30.jpg",
        "title": "Majlis Doa Selamat & Terlajak Raya",
        "date": "2025-05-02",
        "category": "sosial",
        "timestamp": 1746144000000
    },
    {
        "file": "sosial31.jpg",
        "title": "Majlis Doa Selamat & Terlajak Raya",
        "date": "2025-05-02",
        "category": "sosial",
        "timestamp": 1746144000000
    },
    {
        "file": "sosial32.jpg",
        "title": "Majlis Doa Selamat & Terlajak Raya",
        "date": "2025-05-02",
        "category": "sosial",
        "timestamp": 1746144000000
    },
    {
        "file": "sosial33.jpg",
        "title": "Majlis Doa Selamat & Terlajak Raya",
        "date": "2025-05-02",
        "category": "sosial",
        "timestamp": 1746144000000
    },
    {
        "file": "sosial34.jpg",
        "title": "Majlis Doa Selamat & Terlajak Raya",
        "date": "2025-05-02",
        "category": "sosial",
        "timestamp": 1746144000000
    },
    {
        "file": "sosial35.jpg",
        "title": "Majlis Doa Selamat & Terlajak Raya",
        "date": "2025-05-02",
        "category": "sosial",
        "timestamp": 1746144000000
    },
    {
        "file": "sosial36.jpg",
        "title": "Majlis Doa Selamat & Terlajak Raya",
        "date": "2025-05-02",
        "category": "sosial",
        "timestamp": 1746144000000
    },
    {
        "file": "sosial37.jpg",
        "title": "Majlis Doa Selamat & Terlajak Raya",
        "date": "2025-05-02",
        "category": "sosial",
        "timestamp": 1746144000000
    }
];

// --- PART 2: Generated Bulk Data (Warga Emas Program) ---
const wargaEmasData = generateBulkImages(
    39,    // Start: sosial39.jpg
    155,   // End: sosial155.jpg
    "sosial",
    "jpg", // Extension (ensure this matches your files)
    "Program Kesihatan Warga Emas Negeri Selangor",
    "2025-07-27",
    "sosial"
);

// --- PART 3: Export Combined Data ---
export const galleryData: GalleryItem[] = [
    ...existingData,
    ...wargaEmasData
];
type FeaturedEventProps = {
    image: string
    title: string
    location: string
    venue: string
    date: string
}

export default function FeaturedEvent({
    image, title, location, venue, date
}: FeaturedEventProps) {
    return (
        <div className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
            <img src={image} alt={title} className="w-full h-auto object-cover" />

            <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-4">
                <h3 className="text-white text-lg font-semibold">{title}</h3>
                <div className="text-gray-300 text-sm flex flex-wrap gap-3 mt-2">
                    <span>📍 {venue}</span>
                    <span>🌆 {location}</span>
                    <span>📅 {date}</span>
                </div>
            </div>
        </div>
    )
}
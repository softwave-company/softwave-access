type FeatureCardProps = {
  title: string
  subtitle: string
  description: string
  icon: string
};

export default function FeatureCard({ title, subtitle, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-[#0e0e17] rounded-xl p-8 max-w-sm mx-auto text-center text-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="w-25 h-16 mx-auto mb-4 mt-4 flex items-center justify-center rounded-lg">
        <img src={icon} alt={title} />
      </div>
      <div className="pt-4">
        <p className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent uppercase text-sm -mb-1 font-extrabold">{title}</p>
        <h3 className="font-extrabold text-2xl mb-2">{subtitle}</h3>
        <p className="text-gray-300 text-md">
          {description}
        </p>
      </div>
    </div>
  );
} 
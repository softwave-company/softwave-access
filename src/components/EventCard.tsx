import { Calendar, MapPin } from 'lucide-react';


type EventCardProps = {
  date: {
    day: number;
    month: string;
    year: number;
  };
  title: string;
  producer: string;
  time: string;
  location: {
    cidade: string;
    estado: string;
  };
  image: string;
  tags: string[];
};


export default function EventCard({
  date,
  title,
  producer,
  time,
  location,
  image,
  tags
}: EventCardProps) {
  function diaDaSemana(date: { day: number; month: string; year: number }): string {
    const meses: Record<string, number> = {
      janeiro: 0,
      fevereiro: 1,
      março: 2,
      abril: 3,
      maio: 4,
      junho: 5,
      julho: 6,
      agosto: 7,
      setembro: 8,
      outubro: 9,
      novembro: 10,
      dezembro: 11,
    };

    const diasSemana = [
      "DOM",
      "SEG",
      "TER",
      "QUA",
      "QUI",
      "SEX",
      "SAB",
    ];

    const mesNumero = meses[date.month.toLowerCase()];
    if (mesNumero === undefined) return "";

    const dataJS = new Date(date.year, mesNumero, date.day);
    return diasSemana[dataJS.getDay()];
  }



  function abreviarMes(mes: string) {
    const mapMeses: Record<string, string> = {
      janeiro: 'jan',
      fevereiro: 'fev',
      março: 'mar',
      abril: 'abr',
      maio: 'mai',
      junho: 'jun',
      julho: 'jul',
      agosto: 'ago',
      setembro: 'set',
      outubro: 'out',
      novembro: 'nov',
      dezembro: 'dez',
    };

    return mapMeses[mes.toLowerCase()] || mes;
  }


  return (
    <div className="overflow-hidden w-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-lg "
        />
        <div className="absolute top-3 left-3 bg-[#1c1c28] text-white rounded-lg text-center w-[15%] overflow-hidden">
          <p className="font-bold">
            {diaDaSemana(date)}
          </p>
          <p className="text-xl font-bold bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            {date.day}
          </p>

          <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white mt-1 w-full">
            <p className="uppercase font-bold text-xs">{abreviarMes(date.month)}</p>
          </div>
        </div>
      </div>

      <div className="py-4">
        {/* Tags */}
        <div className="flex gap-2 mb-2 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-purple-400 text-xs text-purple-900 font-bold px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-md text-gray-300">{producer}</p>
        <p className="text-md mt-2 font-bold bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
          <span className='text-purple-300'><Calendar size={18} /></span> {date.day} de {date.month} às {time} 
        </p>
        <p className="text-md text-white font-semibold flex items-center gap-2 mt-1"><MapPin size={18} /> {location.cidade} - {location.estado}</p>
      </div>
    </div>
  );
}

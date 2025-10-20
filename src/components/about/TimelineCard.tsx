interface TimelineCardProps {
  event: {
    title: string;
    description: string;
    year: string;
  };
}

const TimelineCard = ({ event }: TimelineCardProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-2 bg-gray-400/20 p-5 rounded-xl">
      <div className="mb-2">
        <span className="text-normal font-medium text-black bg-gray-100 p-2 rounded-xl">{event.year}</span>
      </div>
      <h3 className="text-2xl font-bold animate-fadeIn">{event.title}</h3>
      <p className="text-lg animate-fadeIn">{event.description}</p>
    </div>
  );
};

export default TimelineCard;

import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from '@tanstack/react-router';

export default function DashboardCard({
  title,
  itemsArray,
  navLink,
  CardClassName,
  cardHeaderClassName,
  cardDescriptionClassName,
}) {
  const navigate = useNavigate();

  const rowMapped = itemsArray.map((item, index) => (
    <DescriptionCardRow items={item} key={index} />
  ));

  return (
    <Card className={cn('w-full', CardClassName)}>
      <CardHeader className={cn('flex justify-between items-center', cardHeaderClassName)}>
        <h2 className={cn('text-lg text-center ring-1 ring-border w-1/2 rounded-xl p-2')}>
          {title}
        </h2>
        <CardAction className={cn('min-w-[150px] rounded-xl')}>
          <Button
            className={cn(
              'text-lg text-center w-full rounded-xl h-full bg-secondary text-secondary-foreground cursor-pointer',
            )}
            onClick={() => navigate({ to: `/${navLink}` })}
          >
            Visit Page
          </Button>
        </CardAction>
      </CardHeader>
      <CardDescription className={cn('flex flex-col px-6 py-2 gap-y-5', cardDescriptionClassName)}>
        {rowMapped}
      </CardDescription>
    </Card>
  );
}

function DescriptionCardRow({ items }) {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const rowMapped = Object.keys(items).map((key) => (
    <div className="flex flex-col">
      <span className="font-bold">{capitalize(key)}</span>
      <span className="flex pl-0.25">{items[key]}</span>
    </div>
  ));

  return <div className="flex justify-between ring-1 rounded-lg p-2">{rowMapped}</div>;
}

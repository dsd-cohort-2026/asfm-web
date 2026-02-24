import { cn } from '@/lib/utils';
import { BadgeCheck } from 'lucide-react';
import { Badge } from '../ui/badge';

export default function AdminBadge({ badgeClassName, badgeCheckClassName }) {
  return (
    <Badge
      className={cn('bg-highlight text-highlight-foreground', badgeClassName)}
      variant="outline"
    >
      <BadgeCheck className={cn('', badgeCheckClassName)} />
      <span>Admin</span>
    </Badge>
  );
}

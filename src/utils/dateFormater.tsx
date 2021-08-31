import { format, parseISO } from 'date-fns'

import ptBR from 'date-fns/locale/pt-BR'

export function formatDate(date: string): string {
  const dateISO = parseISO(date)
  const dateFormatted = format(dateISO, 'MMMM dd, yyyy', { locale: ptBR })

  return dateFormatted
}

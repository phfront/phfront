import { format, parseISO } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";

export const formatDate = (dateString: string, lang: string, dateFormat = "PPP") => {
  let langDate;
  switch (lang) {
    case "pt-BR":
      langDate = ptBR;
      break;
    case "en-US":
      langDate = enUS;
      break;
    default:
      langDate = ptBR;
      break;
  }  
  return format(parseISO(dateString), dateFormat, { locale: langDate });
};

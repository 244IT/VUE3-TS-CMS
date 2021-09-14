import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

const TIME_FORMAT = "YYYY-MM-DD hh:mm:ss"
export const formatUtcTime = (
  utcTime: string,
  format: string = TIME_FORMAT
): string => {
  return dayjs.utc(utcTime).utcOffset(8).format(format)
}

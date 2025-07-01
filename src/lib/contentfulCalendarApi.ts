import { contentfulClient } from "./contentfulClient";

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string;

export interface IrregularHour {
  id: string;
  date: string; // YYYY-MM-DD
  openTime?: string; // HH:MM
  closeTime?: string; // HH:MM
  isClosed: boolean;
  notes?: string;
}

export const fetchIrregularHours = async (): Promise<IrregularHour[]> => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "openingHours",
      order: ["fields.openingTime"],
    });
    const irregularHours = response.items.map(
      (item: { fields: Record<string, any>; sys: { id: string } }) => {
        const fields = item.fields;
        let dateStr = "";
        if (fields.openingTime) {
          if (typeof fields.openingTime === "string") {
            dateStr = fields.openingTime.split("T")[0];
          } else if (fields.openingTime instanceof Date) {
            dateStr = fields.openingTime.toISOString().split("T")[0];
          } else if (fields.openingTime.toString) {
            dateStr = fields.openingTime.toString().split("T")[0];
          }
        }
        return {
          id: item.sys.id,
          date: dateStr,
          openTime: typeof fields.openTime === "string" ? fields.openTime : "",
          closeTime:
            typeof fields.closeTime === "string" ? fields.closeTime : "",
          isClosed:
            typeof fields.isClosed === "boolean" ? fields.isClosed : false,
          notes: typeof fields.notes === "string" ? fields.notes : "",
        };
      }
    );
    const todayStr = new Date().toISOString().split("T")[0];
    return irregularHours.filter((item) => item.date >= todayStr);
  } catch (error) {
    console.error("Contentful fetch error:", error);
    return [];
  }
};

import unitsJson from "../../data/units.json";

type U = { unit_id: string; label: string; type: string; area_sqm: number;
           parking_bay?: string; status: string; building_id: string; property_id: string };

const flat: U[] = unitsJson.properties.flatMap(p =>
  p.buildings.flatMap(b =>
    b.units.map(u => ({
      unit_id: u.unit_id, label: u.label, type: u.type, area_sqm: u.area_sqm,
      parking_bay: u.parking_bay, status: u.status,
      building_id: b.building_id, property_id: p.property_id,
    }))
  )
);

export const allUnits = () => flat;
export const findUnit = (id: string) => flat.find(u => u.unit_id.toLowerCase() === id.toLowerCase());
export const unitStatus = (id: string) => findUnit(id)?.status;

export function matchUnitByLabel(label: string | null): U | undefined {
  if (!label) return undefined;
  const digits = label.match(/(\d{3,4})/)?.[1];
  if (!digits) return undefined;
  return flat.find(u => u.unit_id.endsWith(digits) || u.label.includes(digits));
}
export const ROOM_DISPLAY_NAMES: Record<string, string> = {
  english: "English Class",
  phy: "Physics Class",
  math: "Mathematics Class",
  chem: "Chemistry Class",
};

export const getRoomDisplayName = (roomID: string): string => {
  return ROOM_DISPLAY_NAMES[roomID] || roomID;
};

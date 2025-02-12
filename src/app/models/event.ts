import { Location } from "./location";
import { Session } from "./session";

export interface Event{
    id: number;
    name: string;
    date: Date;
    time: string;
    price: number;
    imageUrl: string;
    location: Location;
    onlineUrl?: string;
    sessions: Session[];
}
export interface I_UniRes {
  status: "ok" | "error";
  data?: any;
  message?: string;
}

export interface I_LoginRes extends I_UniRes {
  data: {
    accessToken: string;
  };
}
export interface I_ProductsRes extends I_UniRes {
  data: I_ProductCard[];
}

export enum E_OrderStatus {
  created = "created",
  declined = "declined",
  confirmed = "confirmed",
}

export interface I_User {
  id: number;
  email: string;
}

export interface I_Order {
  id: number;
  nameFirst: string;
  nameSecond: string;
  country: string;
  address: string;
  postalCode: number;
  phoneNumber: number;
  status: E_OrderStatus;
  cart: I_ProductCard[];
  createdAt: Date;
  user: I_User;
}

export interface I_OrderRes extends I_UniRes {
  orders: I_Order[];
}

export enum E_Type {
  sneakers = "sneakers",
  boots = "boots",
  slippers = "slippers",
}

export interface I_ProductCard {
  id: number;
  mainImage: string;
  images: string[];
  price: number;
  priceDiscounted?: number;
  discount: number;
  title: string;
  type: E_Type;
  // isLiked: boolean;
}

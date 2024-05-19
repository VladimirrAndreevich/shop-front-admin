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
  title: string;
  type: E_Type;
  // isLiked: boolean;
}

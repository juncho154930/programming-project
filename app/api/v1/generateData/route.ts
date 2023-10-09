import { NextResponse, NextRequest } from "next/server";

const mockUserdata = [
  {
    id: "1",
    first_name: "Tynan",
    last_name: "Lowless",
    email: "tlowless0@go.com",
  },
  {
    id: "2",
    first_name: "Curran",
    last_name: "Barwise",
    email: "cbarwise1@smugmug.com",
  },
  {
    id: "3",
    first_name: "Nickolai",
    last_name: "Scrogges",
    email: "nscrogges2@about.com",
  },
  {
    id: "4",
    first_name: "Antoni",
    last_name: "Cason",
    email: "acason3@slate.com",
  },
  {
    id: "5",
    first_name: "Ansel",
    last_name: "Grunguer",
    email: "agrunguer4@topsy.com",
  },
];

const mockStockData = [
  {
    id: 1,
    stock_symbol: "AIB",
    stock_market_cap: "$14.29M",
  },
  {
    id: 2,
    stock_symbol: "CL",
    stock_market_cap: "$67.4B",
  },
  {
    id: 3,
    stock_symbol: "CELH",
    stock_market_cap: "$180.82M",
  },
  {
    id: 4,
    stock_symbol: "HA",
    stock_market_cap: "$2.49B",
  },
  {
    id: 5,
    stock_symbol: "BRK.B",
    stock_market_cap: "$5.49B",
  },
];

export async function GET(request: NextRequest) {
  try {
    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type");

    switch (type) {
      case "users":
        return NextResponse.json(mockUserdata, { status: 200 });
        break;
      case "stocks":
        return NextResponse.json(mockStockData, { status: 200 });
        break;
      default:
        return NextResponse.json({}, { status: 200 });
        break;
    }
  } catch (error) {
    console.log("[GENERATE_DATA_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

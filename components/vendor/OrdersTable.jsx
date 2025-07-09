import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";

const orders = [
  {
    name: "Chandler Jacobi",
    avatar: "https://i.pravatar.cc/40?img=1",
    orderId: "#0000",
    amount: "$989.4",
    status: "Completed",
    date: "2/3/2020",
  },
  {
    name: "Monserrat Marquardt",
    avatar: "https://i.pravatar.cc/40?img=2",
    orderId: "#0001",
    amount: "$471.44",
    status: "Un-paid",
    date: "11/29/2019",
  },
  {
    name: "Lonie Wyman",
    avatar: "https://i.pravatar.cc/40?img=3",
    orderId: "#0002",
    amount: "$934.24",
    status: "Paid",
    date: "4/3/2020",
  },
  {
    name: "Corine Abernathy",
    avatar: "https://i.pravatar.cc/40?img=4",
    orderId: "#0003",
    amount: "$351.28",
    status: "Paid",
    date: "6/22/2019",
  },
  {
    name: "Lorenz Botsford",
    avatar: "https://i.pravatar.cc/40?img=5",
    orderId: "#0004",
    amount: "$355.3",
    status: "Completed",
    date: "8/29/2019",
  },
  {
    name: "Everette Botsford",
    avatar: "https://i.pravatar.cc/40?img=6",
    orderId: "#0005",
    amount: "$525.42",
    status: "Paid",
    date: "1/16/2020",
  },
  {
    name: "Marilou Beahan",
    avatar: "https://i.pravatar.cc/40?img=7",
    orderId: "#0006",
    amount: "$414.99",
    status: "Paid",
    date: "10/28/2019",
  },
  {
    name: "Ceasar Sauer",
    avatar: "https://i.pravatar.cc/40?img=8",
    orderId: "#0007",
    amount: "$488",
    status: "Completed",
    date: "7/23/2019",
  },
  {
    name: "Rae McDermott",
    avatar: "https://i.pravatar.cc/40?img=9",
    orderId: "#0008",
    amount: "$502.69",
    status: "Un-paid",
    date: "2/1/2020",
  },
  {
    name: "Mable Steuber",
    avatar: "https://i.pravatar.cc/40?img=10",
    orderId: "#0009",
    amount: "$911.09",
    status: "Un-paid",
    date: "9/9/2019",
  },
];

const statusColor = {
  Paid: "bg-green-600 text-white",
  "Un-paid": "bg-red-600 text-white",
  Completed: "bg-orange-500 text-white",
};

export default function OrdersTable() {
  return (
    <div className="p-6 bg-[#121317] min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <div className="rounded-xl border border-[#1A1C23] bg-[#121317] overflow-hidden shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-400">Client</TableHead>
              <TableHead className="text-gray-400">Order ID</TableHead>
              <TableHead className="text-gray-400">Amount</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={order.avatar} alt={order.name} />
                    <AvatarFallback>{order.name[0]}</AvatarFallback>
                  </Avatar>
                  <span>{order.name}</span>
                </TableCell>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <Badge
                    className={`${
                      statusColor[order.status]
                    } px-3 py-1 rounded-full text-xs`}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4">
          <span className="text-sm text-gray-400">SHOWING 1-10 OF 45</span>
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" className="text-gray-400">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-gray-400">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-gray-400">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-gray-400">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-gray-400">
                  5
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

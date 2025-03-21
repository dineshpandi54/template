import { AddressPageView } from "pages-sections/customer-dashboard/address/page-view";

// API FUNCTIONS
import api from "utils/__api__/address";
export const metadata = {
  title: "Address - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};


// ==============================================================


// ==============================================================

export default async function Address({
  searchParams
}) {
  const {
    page
  } = await searchParams;
  const data = await api.getAddressList(+page || 1);
  if (!data || data.addressList.length === 0) {
    return <div>Data not found</div>;
  }
  return <AddressPageView addressList={data.addressList} totalPages={data.totalPages} />;
}
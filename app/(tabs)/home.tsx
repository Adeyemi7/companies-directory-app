// import { MaterialIcons } from "@expo/vector-icons";
// import React, { useState } from "react";
// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";

// interface Company {
//   symbol: string;
//   price: number;
//   marketCap: number;
//   beta?: number;
//   lastDividend?: number;
//   range?: string;
//   change?: number;
//   changePercentage?: number;
//   volume?: number;
//   averageVolume?: number;
//   companyName: string;
//   currency?: string;
//   cik?: string;
//   isin?: string;
//   cusip?: string;
//   exchangeFullName?: string;
//   exchange: string;
//   industry: string;
//   website?: string;
//   description: string;
//   ceo?: string;
//   sector?: string;
//   country?: string;
//   fullTimeEmployees?: string;
//   phone?: string;
//   address: string;
//   city: string;
//   state: string;
//   zip: string;
//   image: string;
//   ipoDate?: string;
//   defaultImage?: boolean;
//   isEtf?: boolean;
//   isActivelyTrading?: boolean;
//   isAdr?: boolean;
//   isFund?: boolean;
// }

// export default function CompanyDirectoryApp() {
//   const [currentPage, setCurrentPage] = useState<"home" | "details">("home");
//   const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

//   const companies: Company[] = [
//     {
//       symbol: "AAPL",
//       price: 232.8,
//       changePercentage: 2.1,
//       companyName: "Apple Inc.",
//       industry: "Consumer Electronics",
//       city: "Cupertino",
//       state: "CA",
//       description:
//         "Apple Inc. designs and markets smartphones, computers, and accessories worldwide.",
//       address: "One Apple Park Way",
//       zip: "95014",
//       image: "https://images.financialmodelingprep.com/symbol/AAPL.png",
//       marketCap: 3500000000000,
//       exchange: "NASDAQ",
//     },
//     {
//       symbol: "MSFT",
//       price: 415.5,
//       changePercentage: 1.5,
//       companyName: "Microsoft Corporation",
//       industry: "Software",
//       city: "Redmond",
//       state: "WA",
//       description:
//         "Microsoft develops, licenses, and supports software, services, and devices worldwide.",
//       address: "One Microsoft Way",
//       zip: "98052",
//       image: "https://images.financialmodelingprep.com/symbol/MSFT.png",
//       marketCap: 3100000000000,
//       exchange: "NASDAQ",
//     },
//     {
//       symbol: "GOOGL",
//       price: 168.2,
//       changePercentage: -0.9,
//       companyName: "Alphabet Inc.",
//       industry: "Internet Content & Information",
//       city: "Mountain View",
//       state: "CA",
//       description:
//         "Alphabet offers various products and platforms including Google Search, YouTube, and Android.",
//       address: "1600 Amphitheatre Parkway",
//       zip: "94043",
//       image: "https://images.financialmodelingprep.com/symbol/GOOGL.png",
//       marketCap: 2100000000000,
//       exchange: "NASDAQ",
//     },
//   ];

//   const formatCurrency = (value: number): string => {
//     if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
//     if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
//     if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
//     return `$${value}`;
//   };

//   const handleCompanyClick = (company: Company) => {
//     setSelectedCompany(company);
//     setCurrentPage("details");
//   };

//   const handleBack = () => {
//     setSelectedCompany(null);
//     setCurrentPage("home");
//   };

//   if (currentPage === "details" && selectedCompany) {
//     return (
//       <ScrollView style={styles.container}>
//         <View style={styles.detailsHeader}>
//           <TouchableOpacity onPress={handleBack} style={styles.backButton}>
//             <MaterialIcons name="arrow-back" size={24} color="#071531" />
//           </TouchableOpacity>
//           <Text style={styles.detailsTitle}>Company Details</Text>
//         </View>

//         <View style={styles.detailsInfo}>
//           <Image
//             source={{ uri: selectedCompany.image }}
//             style={styles.detailsImage}
//           />
//           <Text style={styles.detailsName}>{selectedCompany.companyName}</Text>
//           <Text style={styles.detailsAddress}>
//             {selectedCompany.address}, {selectedCompany.city},{" "}
//             {selectedCompany.state} {selectedCompany.zip}
//           </Text>

//           <View style={styles.priceContainer}>
//             <Text style={styles.detailsPrice}>${selectedCompany.price}</Text>
//             <Text
//               style={[
//                 styles.detailsChange,
//                 {
//                   color:
//                     selectedCompany.changePercentage &&
//                     selectedCompany.changePercentage > 0
//                       ? "green"
//                       : "red",
//                 },
//               ]}
//             >
//               {selectedCompany.changePercentage
//                 ? `${
//                     selectedCompany.changePercentage > 0 ? "+" : ""
//                   }${selectedCompany.changePercentage.toFixed(2)}%`
//                 : ""}
//             </Text>
//           </View>
//         </View>

//         <View style={styles.aboutBox}>
//           <Text style={styles.aboutTitle}>About</Text>
//           <Text style={styles.aboutText}>{selectedCompany.description}</Text>
//         </View>

//         <View style={styles.stockBox}>
//           <Text style={styles.aboutTitle}>Stock Information</Text>
//           <View style={styles.infoRow}>
//             <Text style={styles.infoLabel}>Market Cap</Text>
//             <Text style={styles.infoValue}>
//               {formatCurrency(selectedCompany.marketCap)}
//             </Text>
//           </View>
//           <View style={styles.infoRow}>
//             <Text style={styles.infoLabel}>Symbol</Text>
//             <Text style={styles.infoValue}>{selectedCompany.symbol}</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <Text style={styles.infoLabel}>Exchange</Text>
//             <Text style={styles.infoValue}>{selectedCompany.exchange}</Text>
//           </View>
//         </View>
//       </ScrollView>
//     );
//   }

//   // ✅ Home Screen
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View style={styles.header}>
//           <View>
//             <Text style={styles.welcome}>Welcome back,</Text>
//             <Text style={styles.username}>Ethan</Text>
//           </View>
//           <View style={styles.notification}>
//             <MaterialIcons name="notifications" size={24} color="#475569" />
//             <View style={styles.badge} />
//           </View>
//         </View>

//         <View style={styles.searchWrapper}>
//           <MaterialIcons
//             name="search"
//             size={20}
//             color="#94A3B8"
//             style={styles.searchIcon}
//           />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search for companies"
//             placeholderTextColor="#94A3B8"
//           />
//         </View>

//         <View style={styles.filterRow}>
//           <TouchableOpacity style={styles.filterBtn}>
//             <Text style={styles.filterText}>Location</Text>
//             <MaterialIcons name="expand-more" size={16} color="#071531" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.filterBtn}>
//             <Text style={styles.filterText}>Industry</Text>
//             <MaterialIcons name="expand-more" size={16} color="#071531" />
//           </TouchableOpacity>
//         </View>

//         <Text style={styles.sectionTitle}>Featured Companies</Text>
//         {companies.map((company) => (
//           <TouchableOpacity
//             key={company.symbol}
//             style={styles.companyCard}
//             onPress={() => handleCompanyClick(company)}
//           >
//             <Image
//               source={{ uri: company.image }}
//               style={styles.companyImage}
//             />
//             <View style={styles.companyInfo}>
//               <Text style={styles.companyCategory}>{company.industry}</Text>
//               <Text style={styles.companyName}>{company.companyName}</Text>
//               <Text style={styles.companyLocation}>
//                 {company.city}, {company.state}
//               </Text>
//             </View>
//             <MaterialIcons name="chevron-right" size={24} color="#64748B" />
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#F8FAFC", paddingHorizontal: 20 },
//   header: {
//     marginTop: 50,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   welcome: { color: "#64748B", fontSize: 14 },
//   username: { fontSize: 20, fontWeight: "700", color: "#071531" },
//   notification: {
//     backgroundColor: "#E2E8F0",
//     padding: 8,
//     borderRadius: 30,
//     position: "relative",
//   },
//   badge: {
//     position: "absolute",
//     right: 8,
//     top: 8,
//     width: 8,
//     height: 8,
//     backgroundColor: "red",
//     borderRadius: 4,
//   },
//   searchWrapper: { marginTop: 20, position: "relative" },
//   searchIcon: { position: "absolute", left: 10, top: 14 },
//   searchInput: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     paddingVertical: 12,
//     paddingLeft: 40,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: "#E2E8F0",
//   },
//   filterRow: {
//     flexDirection: "row",
//     marginTop: 15,
//     marginBottom: 10,
//     gap: 10,
//   },
//   filterBtn: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#E2E8F0",
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//   },
//   filterText: { color: "#071531", fontWeight: "500" },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     marginVertical: 15,
//     color: "#071531",
//   },
//   companyCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "white",
//     padding: 12,
//     borderRadius: 12,
//     marginBottom: 12,
//   },
//   companyImage: { width: 60, height: 60, borderRadius: 10, marginRight: 12 },
//   companyInfo: { flex: 1 },
//   companyCategory: { color: "#475569", fontSize: 12 },
//   companyName: { fontWeight: "700", color: "#071531", fontSize: 15 },
//   companyLocation: { color: "#64748B", fontSize: 13 },
//   // Details page styles
//   detailsHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingTop: 50,
//     paddingBottom: 10,
//   },
//   backButton: {
//     backgroundColor: "#E2E8F0",
//     borderRadius: 30,
//     padding: 10,
//   },
//   detailsTitle: {
//     fontSize: 20,
//     fontWeight: "700",
//     marginLeft: 50,
//     color: "#071531",
//   },
//   detailsInfo: { alignItems: "center", paddingVertical: 20 },
//   detailsImage: { width: 100, height: 100 },
//   detailsName: { fontSize: 22, fontWeight: "700", color: "#071531" },
//   detailsAddress: { color: "#64748B", marginTop: 5 },
//   priceContainer: { flexDirection: "row", alignItems: "center", marginTop: 10 },
//   detailsPrice: { fontSize: 24, fontWeight: "700", color: "#071531" },
//   detailsChange: { fontSize: 14, marginLeft: 6, fontWeight: "600" },
//   aboutBox: {
//     backgroundColor: "#F1F5F9",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 20,
//   },
//   aboutTitle: { fontSize: 16, fontWeight: "700", color: "#071531" },
//   aboutText: { color: "#475569", marginTop: 8 },
//   stockBox: { backgroundColor: "white", borderRadius: 12, padding: 16 },
//   infoRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 6,
//   },
//   infoLabel: { color: "#475569" },
//   infoValue: { fontWeight: "600", color: "#071531" },
// });

import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Company {
  symbol: string
  price: number
  marketCap?: number
  beta?: number
  lastDividend?: number
  range?: string
  change?: number
  changePercentage?: number
  volume?: number
  averageVolume?: number
  companyName: string
  currency?: string
  cik?: string
  isin?: string
  cusip?: string
  exchangeFullName?: string
  exchange?: string
  industry?: string
  website?: string
  description?: string
  ceo?: string
  sector?: string
  country?: string
  fullTimeEmployees?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  image?: string
  ipoDate?: string
  defaultImage?: boolean
  isEtf?: boolean
  isActivelyTrading?: boolean
  isAdr?: boolean
  isFund?: boolean
}

// Fallback companies (in case API fails)
const fallbackCompanies: Company[] = [
  {
    symbol: "AAPL",
    price: 232.8,
    marketCap: 3500823120000,
    beta: 1.24,
    lastDividend: 0.99,
    range: "164.08-260.1",
    change: 4.79,
    changePercentage: 2.1008,
    volume: 0,
    averageVolume: 50542058,
    companyName: "Apple Inc.",
    currency: "USD",
    cik: "0000320193",
    isin: "US0378331005",
    cusip: "037833100",
    exchangeFullName: "NASDAQ Global Select",
    exchange: "NASDAQ",
    industry: "Consumer Electronics",
    website: "https://www.apple.com",
    description:
      "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content.",
    ceo: "Mr. Timothy D. Cook",
    sector: "Technology",
    country: "US",
    fullTimeEmployees: "164000",
    phone: "(408) 996-1010",
    address: "One Apple Park Way",
    city: "Cupertino",
    state: "CA",
    zip: "95014",
    image: "https://images.financialmodelingprep.com/symbol/AAPL.png",
    ipoDate: "1980-12-12",
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false,
  },
  {
    symbol: "MSFT",
    companyName: "Microsoft Corporation",
    industry: "Software",
    sector: "Technology",
    city: "Redmond",
    state: "WA",
    country: "US",
    image: "https://images.financialmodelingprep.com/symbol/MSFT.png",
    description:
      "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.",
    ceo: "Mr. Satya Nadella",
    fullTimeEmployees: "221000",
    phone: "(425) 882-8080",
    address: "One Microsoft Way",
    zip: "98052",
    ipoDate: "1986-03-13",
    website: "https://www.microsoft.com",
    price: 415.5,
    marketCap: 3100000000000,
    exchange: "NASDAQ",
  },
  {
    symbol: "GOOGL",
    companyName: "Alphabet Inc.",
    industry: "Internet Content & Information",
    sector: "Technology",
    city: "Mountain View",
    state: "CA",
    country: "US",
    image: "https://images.financialmodelingprep.com/symbol/GOOGL.png",
    description:
      "Alphabet Inc. offers various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America.",
    ceo: "Mr. Sundar Pichai",
    fullTimeEmployees: "190234",
    phone: "(650) 253-0000",
    address: "1600 Amphitheatre Parkway",
    zip: "94043",
    ipoDate: "2004-08-19",
    website: "https://abc.xyz",
    price: 168.2,
    marketCap: 2100000000000,
    exchange: "NASDAQ",
  },
];

export default function CompanyDirectoryApp() {
  const [currentPage, setCurrentPage] = useState<"home" | "details">("home");
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch API data
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch(
          `https://financialmodelingprep.com/stable/cik-list?page=4&limit=100&apikey=r7fqqiJFEFLQrSa7UqXfarNiGEUml1g8`
          // "https://financialmodelingprep.com/stable/cik-list?page=0&limit=100&apikey=r7fqqiJFEFLQrSa7UqXfarNiGEUml1g8"
          // "https://financialmodelingprep.com/api/v3/cik-list?page=0&limit=100&apikey=r7fqqiJFEFLQrSa7UqXfarNiGEUml1g8"
        );
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const topCompanies = data.slice(0, 10).map((item: any) => ({
            symbol: item.symbol,
            price: item.price,
            changePercentage: item.changesPercentage || 0,
            companyName: item.name,
            industry: "N/A",
            city: "",
            state: "",
            description: "No description available.",
            address: "",
            zip: "",
            image: `https://images.financialmodelingprep.com/symbol/${item.symbol}.png`,
            marketCap: item.marketCap || 0,
            exchange: item.exchangeShortName || "N/A",
          }));

          setCompanies(topCompanies);
        } else {
          setCompanies(fallbackCompanies);
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
        setCompanies(fallbackCompanies);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const formatCurrency = (value: number): string => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value}`;
  };

  const handleCompanyClick = (company: Company) => {
    setSelectedCompany(company);
    setCurrentPage("details");
  };

  const handleBack = () => {
    setSelectedCompany(null);
    setCurrentPage("home");
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.loadingText}>Fetching company data...</Text>
      </View>
    );
  }

  if (currentPage === "details" && selectedCompany) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.detailsHeader}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={24} color="#071531" />
          </TouchableOpacity>
          <Text style={styles.detailsTitle}>Company Details</Text>
        </View>

        <View style={styles.detailsInfo}>
          <Image
            source={{ uri: selectedCompany.image }}
            style={styles.detailsImage}
          />
          <Text style={styles.detailsName}>{selectedCompany.companyName}</Text>
          <Text style={styles.detailsAddress}>
            {selectedCompany.address}, {selectedCompany.city},{" "}
            {selectedCompany.state} {selectedCompany.zip}
          </Text>

          <View style={styles.priceContainer}>
            <Text style={styles.detailsPrice}>${selectedCompany.price}</Text>
            <Text
              style={[
                styles.detailsChange,
                {
                  color:
                    selectedCompany.changePercentage &&
                    selectedCompany.changePercentage > 0
                      ? "green"
                      : "red",
                },
              ]}
            >
              {selectedCompany.changePercentage
                ? `${
                    selectedCompany.changePercentage > 0 ? "+" : ""
                  }${selectedCompany.changePercentage.toFixed(2)}%`
                : ""}
            </Text>
          </View>
        </View>

        <View style={styles.aboutBox}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.aboutText}>{selectedCompany.description}</Text>
        </View>

        <View style={styles.stockBox}>
          <Text style={styles.aboutTitle}>Stock Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Market Cap</Text>
            <Text style={styles.infoValue}>
              {formatCurrency(selectedCompany.marketCap || 0)}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Symbol</Text>
            <Text style={styles.infoValue}>{selectedCompany.symbol}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Exchange</Text>
            <Text style={styles.infoValue}>{selectedCompany.exchange}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Welcome back,</Text>
            <Text style={styles.username}>Ethan</Text>
          </View>
          <View style={styles.notification}>
            <MaterialIcons name="notifications" size={24} color="#475569" />
            <View style={styles.badge} />
          </View>
        </View>

        <View style={styles.searchWrapper}>
          <MaterialIcons
            name="search"
            size={20}
            color="#94A3B8"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for companies"
            placeholderTextColor="#94A3B8"
          />
        </View>

        <Text style={styles.sectionTitle}>Featured Companies</Text>
        {companies.map((company) => (
          <TouchableOpacity
            key={company.symbol}
            style={styles.companyCard}
            onPress={() => handleCompanyClick(company)}
          >
            <Image
              source={{ uri: company.image }}
              style={styles.companyImage}
            />
            <View style={styles.companyInfo}>
              <Text style={styles.companyCategory}>{company.industry}</Text>
              <Text style={styles.companyName}>{company.companyName}</Text>
              <Text style={styles.companyLocation}>
                {company.city}, {company.state}
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#64748B" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC", paddingHorizontal: 20 },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: { marginTop: 10, color: "#334155", fontSize: 16 },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcome: { color: "#64748B", fontSize: 14 },
  username: { fontSize: 20, fontWeight: "700", color: "#071531" },
  notification: {
    backgroundColor: "#E2E8F0",
    padding: 8,
    borderRadius: 30,
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 4,
  },
  searchWrapper: { marginTop: 20, position: "relative" },
  searchIcon: { position: "absolute", left: 10, top: 14 },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 12,
    paddingLeft: 40,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 15,
    color: "#071531",
  },
  companyCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  companyImage: { width: 60, height: 60, borderRadius: 10, marginRight: 12 },
  companyInfo: { flex: 1 },
  companyCategory: { color: "#475569", fontSize: 12 },
  companyName: { fontWeight: "700", color: "#071531", fontSize: 15 },
  companyLocation: { color: "#64748B", fontSize: 13 },
  detailsHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 10,
  },
  backButton: {
    backgroundColor: "#E2E8F0",
    borderRadius: 30,
    padding: 10,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 50,
    color: "#071531",
  },
  detailsInfo: { alignItems: "center", paddingVertical: 20 },
  detailsImage: { width: 100, height: 100 },
  detailsName: { fontSize: 22, fontWeight: "700", color: "#071531" },
  detailsAddress: { color: "#64748B", marginTop: 5 },
  priceContainer: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  detailsPrice: { fontSize: 24, fontWeight: "700", color: "#071531" },
  detailsChange: { fontSize: 14, marginLeft: 6, fontWeight: "600" },
  aboutBox: {
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  aboutTitle: { fontSize: 16, fontWeight: "700", color: "#071531" },
  aboutText: { color: "#475569", marginTop: 8 },
  stockBox: { backgroundColor: "white", borderRadius: 12, padding: 16 },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  infoLabel: { color: "#475569" },
  infoValue: { fontWeight: "600", color: "#071531" },
});

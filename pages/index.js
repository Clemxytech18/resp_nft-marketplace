import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import Gallery from "../components/Gallery";
import { MediaConfiguration } from "@zoralabs/nft-components";

export default function Home() {
  return (
    <MediaConfiguration
      style={{
        theme: {
          audioColors: {
            progressColor: "#333",
            waveformColor: "#999",
          },
          bodyFont: {
            fontFamily: "courier new",
            fontWeight: 500,
          },
          borderStyle: "2px solid #e6e6e6",
          buttonColor: {
            background: "#eee",
            primaryBackground: "#333",
            primaryText: "#fff",
            text: "#000",
          },
          defaultBorderRadius: 4,
          fontSizeFull: 16,
          headerFont:
            "\n    font-family: Inter, Helvetica;\n    font-weight: 500;\n  ",
          lineSpacing: 24,
          linkColor: "#000",
          maximumPricingDecimals: 8,
          mediaContentFont: {
            fontFamily: "Times New Roman",
          },
          nftProposalCard: {
            mediaHeight: "160px",
            mediaWidth: "160px",
          },
          previewCard: {
            background: "white",
            height: "250px",
            width: "100%",
          },
          showTxnLinks: true,
          textBlockPadding: "10px 15px",
          titleFont: {
            fontFamily: "courier new",
            fontWeight: 500,
          },
        },
      }}
    >
      <div>
        <div className="header">
          <Nav />
          <Header />
        </div>
        <Gallery />
      </div>
    </MediaConfiguration>
  );
}

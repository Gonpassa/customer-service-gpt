import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react"
import {
  AlphaCard,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText,
} from "@shopify/polaris"
import { QRCodeIndex } from "../components";

export default function HomePage(){
  const navigate = useNavigate()

  const isLoading = false
  const isRefetching = false
  const QRCodes = []

  const qrCodesMarkup = QRCodes?.length ? (
    <QRCodeIndex QRCodes={QRCodes} loading={isRefetching} />
  ) : null;

  const loadingMarkup = isLoading ? (
    <AlphaCard sectioned>
      <Loading />
      <SkeletonBodyText />
    </AlphaCard>
  ) : null;

  const emptyStateMarkup = 
    !isLoading && !QRCodes?.length ? (
      <AlphaCard sectioned>
        <EmptyState
          heading = 'Create QR codes for your product'
          action={{
            content: "Create QR Code",
            onAction: () => navigate("/qrcodes/new")
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          >
            <p>
              Allow customers to scan codes and buy products using their phones.
            </p>
          </EmptyState>
      </AlphaCard>
    ) : null

    return (
      <Page fullWidth={!!qrCodesMarkup}>
        <TitleBar
          title="QR codes"
          primaryAction={{
            content: "Create QR Codes",
            onAction: () => navigate("/new")
            }} 
        />
        <Layout>
          <Layout.Section>
            {loadingMarkup}
            {qrCodesMarkup}
            {emptyStateMarkup}
          </Layout.Section>
        </Layout>
      </Page>
    )

}
import { type FC } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

interface IPDFProps {
  data: any;
  author: string;
  show?: boolean;
}

const IdentityCard: FC<IPDFProps> = ({ data, author, show }) => {
  return (
    <Document author={author} style={{ display: show ? "flex" : "none" }}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{data.sectionOne.title}</Text>
          <Text style={styles.desc}>{data.sectionOne.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>{data.sectionTwo.title}</Text>
          <Text style={styles.desc}>{data.sectionTwo.description}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default IdentityCard;

IdentityCard.defaultProps = {
  show: true
};

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  section: {
    margin: 10,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: 3
  },
  title: {
    fontWeight: "bold",
    color: "red"
  },
  desc: {
    fontWeight: "light",
    color: "green"
  }
});

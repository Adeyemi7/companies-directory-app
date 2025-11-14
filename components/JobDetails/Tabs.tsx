import React from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  View,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

type TabButtonProps = {
  name: string;
  activeTab: string;
  onHandleSearchType: (event: GestureResponderEvent) => void;
};

const TabButton: React.FC<TabButtonProps> = ({
  name,
  activeTab,
  onHandleSearchType,
}) => {
  const isActive = name === activeTab;

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor: isActive ? "#2D2B73" : "#F3F4F8",
        },
      ]}
      onPress={onHandleSearchType}
    >
      <Text
        style={[
          styles.btnText,
          {
            color: isActive ? "#EAE8F4" : "#AAA9B8",
          },
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

type TabsProps = {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 6,
  },

  listContent: {
    columnGap: 6,
  },

  btn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginLeft: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },

  btnText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default Tabs;

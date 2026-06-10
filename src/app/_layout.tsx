import { Stack } from "expo-router";
import { colors } from "@/theme/colors";
import { SQLiteProvider } from 'expo-sqlite'
import { migrate } from "@/database/migrate";
import { Suspense } from "react";
import Loading from "@/app/components/Loading";

export default function Layout() {
  return (
    <Suspense fallback={ <Loading /> }>
      <SQLiteProvider
        databaseName='boxcoin.db'
        onInit={migrate}
        useSuspense
      >
        <Stack screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.white }
        }} />
      </SQLiteProvider>
    </Suspense>
  )
}
import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CAMPAIGNAPPLICATION_TITLE_FIELD } from "./CampaignApplicationTitle";
import { CAMPAIGN_TITLE_FIELD } from "../campaign/CampaignTitle";

export const CampaignApplicationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="campaign"
          source="campaign.id"
          reference="Campaign"
        >
          <TextField source={CAMPAIGN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="CampaignApplicationId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Campaign Application"
              source="campaignapplication.id"
              reference="CampaignApplication"
            >
              <TextField source={CAMPAIGNAPPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

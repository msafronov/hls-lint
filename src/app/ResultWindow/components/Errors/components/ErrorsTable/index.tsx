import { useStore } from '@nanostores/preact';

import * as Table from '@/ui/Table';
import { Text } from '@/ui/Text';

import { $parseResultStore } from '@/app/EditorWindow/stores/parseResultStore';

export const ErrorsTable = () => {
    const parseResult = useStore($parseResultStore);

    return (
        <Table.Wrapper>
            <>
                <Table.HeadRow>
                    <Table.HeadCol size={20}>
                        <Text family="garamond" size="lg">Tag</Text>
                    </Table.HeadCol>

                    <Table.HeadCol size={10}>
                        <Text family="garamond" size="lg">Row</Text>
                    </Table.HeadCol>

                    <Table.HeadCol size={10}>
                        <Text family="garamond" size="lg">Col</Text>
                    </Table.HeadCol>

                    <Table.HeadCol size={20}>
                        <Text family="garamond" size="lg">Value</Text>
                    </Table.HeadCol>

                    <Table.HeadCol size={40}>
                        <Text family="garamond" size="lg">Text</Text>
                    </Table.HeadCol>
                </Table.HeadRow>

                {Object.values(parseResult.errors).map((errors) => {
                    return errors.map((error) => {
                        return (
                            <Table.BodyRow>
                                <Table.BodyCol size={20} selected>
                                    <Text family="garamond" size="lg">{error.relatesTo}</Text>
                                </Table.BodyCol>

                                <Table.BodyCol size={10} centered>
                                    <Text family="garamond" size="lg">{error.row}</Text>
                                </Table.BodyCol>

                                <Table.BodyCol size={10} centered>
                                    <Text family="garamond" size="lg">{error.col}</Text>
                                </Table.BodyCol>

                                <Table.BodyCol size={20} centered>
                                    <Text family="garamond" size="lg">{error.value?.toString() || '-'}</Text>
                                </Table.BodyCol>

                                <Table.BodyCol size={40}>
                                    <Text family="garamond" size="lg">{error.message}</Text>
                                </Table.BodyCol>
                            </Table.BodyRow>
                        );
                    });
                })}
            </>
        </Table.Wrapper>
    );
};

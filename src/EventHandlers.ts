/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
	OracleCoordinator,
	OracleCoordinator_CommitmentDeleted,
	OracleCoordinator_ConfigSet,
	OracleCoordinator_ConfigUpdated,
	OracleCoordinator_OracleAdded,
	OracleCoordinator_OracleRemoved,
	OracleCoordinator_OwnershipTransferRequested,
	OracleCoordinator_OwnershipTransferred,
	OracleCoordinator_Request,
	OracleCoordinator_Response,
} from 'generated';

OracleCoordinator.CommitmentDeleted.handler(async ({ event, context }) => {
	const entity: OracleCoordinator_CommitmentDeleted = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		requestId: event.params.requestId,
	};

	context.OracleCoordinator_CommitmentDeleted.set(entity);
});

OracleCoordinator.ConfigSet.handler(async ({ event, context }) => {
	const entity: OracleCoordinator_ConfigSet = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		maxOracles: event.params.maxOracles,
		previousConfigBlockNumber: event.params.previousConfigBlockNumber,
		configDigest: event.params.configDigest,
	};

	context.OracleCoordinator_ConfigSet.set(entity);
});

OracleCoordinator.ConfigUpdated.handler(async ({ event, context }) => {
	const entity: OracleCoordinator_ConfigUpdated = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		config_0: event.params.config,
	};

	context.OracleCoordinator_ConfigUpdated.set(entity);
});

OracleCoordinator.OracleAdded.handler(async ({ event, context }) => {
	const entity: OracleCoordinator_OracleAdded = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		transmitter: event.params.transmitter,
	};

	context.OracleCoordinator_OracleAdded.set(entity);
});

OracleCoordinator.OracleRemoved.handler(async ({ event, context }) => {
	const entity: OracleCoordinator_OracleRemoved = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		transmitter: event.params.transmitter,
	};

	context.OracleCoordinator_OracleRemoved.set(entity);
});

OracleCoordinator.OwnershipTransferRequested.handler(
	async ({ event, context }) => {
		const entity: OracleCoordinator_OwnershipTransferRequested = {
			id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
			from: event.params.from,
			to: event.params.to,
		};

		context.OracleCoordinator_OwnershipTransferRequested.set(entity);
	}
);

OracleCoordinator.OwnershipTransferred.handler(async ({ event, context }) => {
	const entity: OracleCoordinator_OwnershipTransferred = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		from: event.params.from,
		to: event.params.to,
	};

	context.OracleCoordinator_OwnershipTransferred.set(entity);
});

// OracleCoordinator.Request.handler(async ({ event, context }) => {
// 	const entity: OracleCoordinator_Request = {
// 		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
// 		requestId: event.params.requestId,
// 		requestingContract: event.params.requestingContract,
// 		requestInitiator: event.params.requestInitiator,
// 		subscriptionId: event.params.subscriptionId,
// 		subscriptionOwner: event.params.subscriptionOwner,
// 		data: event.params.data,
// 		callbackGasLimit: event.params.callbackGasLimit,
// 		commitment_0: event.params.commitment[0],
// 		commitment_1: event.params.commitment[1],
// 		commitment_2: event.params.commitment[2],
// 		commitment_3: event.params.commitment[3],
// 		commitment_4: event.params.commitment[4],
// 		commitment_5: event.params.commitment[5],
// 	};

// 	context.OracleCoordinator_Request.set(entity);
// });

// OracleCoordinator.Response.handler(async ({ event, context }) => {
// 	const entity: OracleCoordinator_Response = {
// 		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
// 		requestId: event.params.requestId,
// 		transmitter: event.params.transmitter,
// 	};

// 	context.OracleCoordinator_Response.set(entity);
// });

import assert from "assert";
import { 
  TestHelpers,
  OracleCoordinator_CommitmentDeleted
} from "generated";
const { MockDb, OracleCoordinator } = TestHelpers;

describe("OracleCoordinator contract CommitmentDeleted event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for OracleCoordinator contract CommitmentDeleted event
  const event = OracleCoordinator.CommitmentDeleted.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("OracleCoordinator_CommitmentDeleted is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await OracleCoordinator.CommitmentDeleted.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualOracleCoordinatorCommitmentDeleted = mockDbUpdated.entities.OracleCoordinator_CommitmentDeleted.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedOracleCoordinatorCommitmentDeleted: OracleCoordinator_CommitmentDeleted = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      requestId: event.params.requestId,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualOracleCoordinatorCommitmentDeleted, expectedOracleCoordinatorCommitmentDeleted, "Actual OracleCoordinatorCommitmentDeleted should be the same as the expectedOracleCoordinatorCommitmentDeleted");
  });
});

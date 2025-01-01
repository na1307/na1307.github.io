using BluehillHomePage.Pages;
using Bunit;

namespace BluehillHomePage.Tests;

public sealed class TimeTest : Bunit.TestContext {
    private static readonly SeoulTimeProvider stp = new();

    [Fact]
    public async Task TimeComponentUpdatesTime() {
        // Arrange
        var cut = RenderComponent<Time>();

        // Act
        var initialDt = stp.GetLocalNow();
        var initialTime = cut.FindAll("span.d-flex.justify-content-center")[1].InnerHtml;
        await Task.Delay(2000, Xunit.TestContext.Current.CancellationToken); // Wait for 2 seconds to allow time to update
        cut.Render(); // Re-render the component
        var updatedDt = stp.GetLocalNow();
        var updatedTime = cut.FindAll("span.d-flex.justify-content-center")[1].InnerHtml;

        // Assert
        Assert.Contains(initialDt.ToString("HH:mm:ss"), initialTime);
        Assert.NotEqual(initialTime, updatedTime);
        Assert.Contains(updatedDt.ToString("HH:mm:ss"), updatedTime);
    }

    private sealed class SeoulTimeProvider : TimeProvider {
        public override TimeZoneInfo LocalTimeZone => TimeZoneInfo.FindSystemTimeZoneById("Asia/Seoul");
    }
}

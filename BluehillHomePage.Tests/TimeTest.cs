﻿using BluehillHomePage.Pages;
using Bunit;
using TestContext = Bunit.TestContext;

namespace BluehillHomePage.Tests;

public sealed class TimeTest : TestContext {
    [Fact]
    public async Task TimeComponentUpdatesTime() {
        // Arrange
        var cut = RenderComponent<Time>();

        // Act
        var initialDt = DateTime.Now;
        var initialTime = cut.FindAll("span.d-flex.justify-content-center")[1].InnerHtml;
        await Task.Delay(2000); // Wait for 2 seconds to allow time to update
        cut.Render(); // Re-render the component
        var updatedDt = DateTime.Now;
        var updatedTime = cut.FindAll("span.d-flex.justify-content-center")[1].InnerHtml;

        // Assert
        Assert.Contains(initialDt.ToString("HH:mm:ss"), initialTime);
        Assert.NotEqual(initialTime, updatedTime);
        Assert.Contains(updatedDt.ToString("HH:mm:ss"), updatedTime);
    }
}
